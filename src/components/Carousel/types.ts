export type T_CarouselProps =
{
	numberElement:number;
	gap:number;
	elementsNames:string[];
};

export type T_CarouselElement<T> = T &
{
	name:string;
};
