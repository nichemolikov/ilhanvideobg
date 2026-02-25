export interface Photo {
  id: string;
  url: string;
  category: 'Wedding' | 'Engagement' | 'Video';
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  date: string;
}
