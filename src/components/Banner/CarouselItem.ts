export interface SideItem {
    Name: string;
    Image: string;
}
export interface CarouselItem {
    Name: string;
    Caption: string;
    contentPosition: 'left' | 'middle' | 'right';
    Items: SideItem[];
}
