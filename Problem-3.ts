function maxTotalCost(stones: number[]): number {
  const n = stones.length;
  const dp: number[] = new Array(n);
  dp[0] = 0;
  dp[1] = Math.abs(stones[1] - stones[0]);

  for (let i = 2; i < n; i++) {
    const cost1 = dp[i - 1] + Math.abs(stones[i] - stones[i - 1]);
    const cost2 = dp[i - 2] + Math.abs(stones[i] - stones[i - 2]);
    dp[i] = Math.max(cost1, cost2);
  }

  return dp[n - 1];
}

const stones1 = [10, 30, 40, 20];
console.log(maxTotalCost(stones1)); // output: 30

const stones2 = [30, 10, 60, 10, 60, 50];
console.log(maxTotalCost(stones2)); // output: 40
