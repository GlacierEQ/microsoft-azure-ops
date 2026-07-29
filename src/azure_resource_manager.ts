/**
 * Microsoft Azure Ops — TypeScript Azure Resource & Cost Optimizer
 * Manages Azure VM/AKS resource scaling, cost right-sizing, and multi-region failover.
 */

export interface AzureResource {
  resourceId: string;
  resourceType: 'VirtualMachine' | 'AKSCluster' | 'SQLDatabase' | 'CosmosDB';
  region: string;
  cpuCores: number;
  memoryGB: number;
  avgCpuUtilPct: number;
  monthlyCostUSD: number;
}

export interface OptimizationRecommendation {
  resourceId: string;
  action: 'ScaleDown' | 'Shutdown' | 'ReservedInstance' | 'NoChange';
  estimatedSavingsUSD: number;
  reason: string;
}

export class AzureCostOptimizer {
  private resources: Map<string, AzureResource> = new Map();

  public registerResource(res: AzureResource): void {
    this.resources.set(res.resourceId, res);
  }

  public analyzeCostSavings(): OptimizationRecommendation[] {
    const recommendations: OptimizationRecommendation[] = [];

    for (const res of this.resources.values()) {
      if (res.avgCpuUtilPct < 5.0 && res.monthlyCostUSD > 100) {
        recommendations.push({
          resourceId: res.resourceId,
          action: 'Shutdown',
          estimatedSavingsUSD: res.monthlyCostUSD,
          reason: `Underutilized resource (CPU avg ${res.avgCpuUtilPct}% < 5%)`,
        });
      } else if (res.avgCpuUtilPct < 20.0 && res.monthlyCostUSD > 200) {
        const savings = res.monthlyCostUSD * 0.4;
        recommendations.push({
          resourceId: res.resourceId,
          action: 'ScaleDown',
          estimatedSavingsUSD: savings,
          reason: `Low CPU usage (${res.avgCpuUtilPct}%), right-size SKU to save 40%`,
        });
      } else if (res.avgCpuUtilPct >= 60.0 && res.monthlyCostUSD > 500) {
        const savings = res.monthlyCostUSD * 0.35; // 3-year RI savings
        recommendations.push({
          resourceId: res.resourceId,
          action: 'ReservedInstance',
          estimatedSavingsUSD: savings,
          reason: `High steady utilization (${res.avgCpuUtilPct}%), convert to Reserved Instance`,
        });
      } else {
        recommendations.push({
          resourceId: res.resourceId,
          action: 'NoChange',
          estimatedSavingsUSD: 0,
          reason: 'Resource utilization within optimal range',
        });
      }
    }

    return recommendations;
  }

  public totalMonthlyCost(): number {
    let total = 0;
    for (const res of this.resources.values()) {
      total += res.monthlyCostUSD;
    }
    return total;
  }
}
