export interface GetReadyDetailsInputs {
    pagesList?: {
        title: string,
        summary?: string,
        sections?: {
            title: string;
            summary?: string,
            contents?: string,
            priority?: number
        }[]
    }[],
    header?: string
}