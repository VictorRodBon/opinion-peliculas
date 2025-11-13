export interface interfazPeliculas {
  _id?: string; // MongoDB genera este campo automáticamente
  title: string;
  premiere: string;
  director: string;
  short_description: string;
  long_description: string;
  image: string;
  duration: number;
  main_actors: string[];
}

