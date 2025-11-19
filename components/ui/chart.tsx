"use client"

import * as React from "react"
import {
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  ResponsiveContainer,
} from "recharts"
import { cn } from "@/lib/utils"

/* -------------------- CONFIG -------------------- */

const THEMES = {
  light: "",
  dark: ".dark",
} as const

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
    theme?: Record<keyof typeof THEMES, string>
  }
>

type ChartContextType = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextType | null>(null)

function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) throw new Error("useChart must be inside ChartContainer")
  return ctx
}

/* -------------------- CONTAINER -------------------- */

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ReactNode
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        {...props}
        className={cn(
          "flex aspect-video justify-center text-xs",
          "[&_.recharts-layer]:outline-hidden [&_.recharts-surface]:outline-hidden",
          className
        )}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

/* -------------------- AUTO STYLE -------------------- */

export function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const entries = Object.entries(config).filter(([_, c]) => c.color || c.theme)
  if (!entries.length) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${entries
  .map(([key, c]) => {
    const color =
      c.theme?.[theme as keyof typeof THEMES] ??
      c.color ??
      undefined
    return color ? `--color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

/* -------------------- TOOLTIP -------------------- */

export const ChartTooltip = RechartsTooltip

// Recharts payload type (aman)
interface ChartPayloadItem {
  dataKey?: string
  name?: string
  value?: number | string
  color?: string
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: ChartPayloadItem[]
  label?: string | number
  className?: string
  indicator?: "dot" | "line" | "dashed"
  hideLabel?: boolean
  hideIndicator?: boolean
  labelClassName?: string
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
}: ChartTooltipContentProps) {
  const { config } = useChart()

  if (!active || !payload || payload.length === 0) return null

  return (
    <div
      className={cn(
        "border border-border/50 bg-background rounded-md px-3 py-2 shadow-md text-xs",
        className
      )}
    >
      {!hideLabel && label && (
        <div className="mb-1 font-medium">{label}</div>
      )}

      <div className="grid gap-1">
        {payload.map((item, i) => {
          const key = item.dataKey || item.name || `item-${i}`
          const cfg = config[key]
          const color = item.color || `var(--color-${key})`

          return (
            <div key={i} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {!hideIndicator && (
                  <span
                    className={cn(
                      "inline-block rounded-sm",
                      indicator === "dot" && "h-2 w-2",
                      indicator === "line" && "h-2 w-1",
                      indicator === "dashed" && "h-2 w-1 border border-dashed"
                    )}
                    style={{ backgroundColor: color, borderColor: color }}
                  />
                )}

                {cfg?.label ?? key}
              </div>

              <span className="font-mono">
                {typeof item.value === "number"
                  ? item.value.toLocaleString()
                  : item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* -------------------- LEGEND -------------------- */

export const ChartLegend = RechartsLegend

// Legend payload type manual (aman)
interface LegendPayloadItem {
  dataKey?: string
  value?: string
  color?: string
}

export function ChartLegendContent({
  payload,
  className,
  hideIcon = false,
}: {
  payload?: LegendPayloadItem[]
  className?: string
  hideIcon?: boolean
}) {
  const { config } = useChart()

  if (!payload) return null

  return (
    <div className={cn("flex items-center justify-center gap-4 pt-2", className)}>
      {payload.map((item, i) => {
        const key = item.dataKey || item.value || `legend-${i}`
        const cfg = config[key]

        return (
          <div key={i} className="flex items-center gap-1.5 text-muted-foreground">
            {!hideIcon &&
              (cfg?.icon ? (
                <cfg.icon />
              ) : (
                <span
                  className="inline-block h-2 w-2 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
              ))}
            <span>{cfg?.label ?? item.value}</span>
          </div>
        )
      })}
    </div>
  )
}
