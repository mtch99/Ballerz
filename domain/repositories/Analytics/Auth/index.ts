

export default interface IAuthAnalyticsRepository{
    getLastLaunch(): Promise<Date>
    getFirstLaunch(): Promise<Date>
    setLastLaunchToNow(): void
    __setFirstLaunch(date: Date): void
}