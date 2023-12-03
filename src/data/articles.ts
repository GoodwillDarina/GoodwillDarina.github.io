type Article = {
  id: number;
  title: string;
  link: string;
  preview: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: 'Кратко и честно про наш фронтенд',
    link: 'https://vk.com/@devngs-kratko-i-chestno-pro-nash-frontend',
    preview: './articles/frontend.webp'
  },
  {
    id: 2,
    title: 'reCAPTCHA - мини-руководство пользователя',
    link: 'https://vk.com/@devngs-recaptcha-mini-rukovodstvo-polzovatelya',
    preview: './articles/captcha.webp'
  },
  {
    id: 3,
    title: 'Кратко о семантичной верстке',
    link: 'https://vk.com/@devngs-kratko-o-semantichnoi-verstke',
    preview: './articles/semantic.webp'
  },
  {
    id: 4,
    title: 'Сказ о том, как не нужно работать с эмодзи',
    link: 'https://vk.com/@shkulevtech-skaz-o-tom-kak-ne-nuzhno-rabotat-s-emodzi',
    preview: './articles/emoji.webp'
  }
];
