type Video = {
  id: number;
  title: string;
  link: string;
  preview: string;
};

export const videos: Video[] = [
  {
    id: 1,
    title: 'Как подружиться с CSS Grid',
    link: 'https://www.youtube.com/watch?v=lxZGD-zSYs8',
    preview: './videos/grids.webp'
  },
  {
    id: 2,
    title: 'Lazy loading image',
    link: 'https://www.youtube.com/watch?v=0-1Ds7eG968&t=609s',
    preview: './videos/lazy-loading.webp'
  },
  {
    id: 3,
    title: 'JS на собесах',
    link: 'https://www.youtube.com/watch?v=1CSYTkUH31U',
    preview: './videos/js.webp'
  },
  {
    id: 4,
    title: 'Семантика',
    link: 'https://www.youtube.com/watch?v=6b4yJQmIN3Y',
    preview: './videos/semantic.webp'
  }
];
