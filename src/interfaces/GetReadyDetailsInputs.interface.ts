export interface GetReadyDetailsInputs {
    pagesList?: {
        title: string,
        summary?: string,
        sections?: {
            title: string;
            summary?: string,
            contents?: string,
            priority?: 1 | 2 | 3
        }[]
    }[],
    header?: string
}