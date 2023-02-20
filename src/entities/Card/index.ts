export interface Card {
    id: string,
    title: string,
    subtitle: string,
    imageUrl: string,
    likes: number,
    shares: number,
    commentsCount: number,
    author?: string,
}

export const EMPTY_CARD: Card = {
    id: '',
    title: '',
    subtitle: '',
    imageUrl: '',
    likes: 0,
    shares: 0,
    commentsCount: 0,
    author: '',
};
