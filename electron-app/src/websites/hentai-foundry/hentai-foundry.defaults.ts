import { HentaiFoundryFileOptions } from './hentai-foundry.interface';
import { GenericDefaultFileOptions } from '../generic/generic.defaults';

export const HentaiFoundryDefaultFileOptions: HentaiFoundryFileOptions = {
  ...GenericDefaultFileOptions,
  scraps: false,
  disableComments: false,
  category: undefined,
  nudityRating: '0',
  violenceRating: '0',
  profanityRating: '0',
  racismRating: '0',
  sexRating: '0',
  spoilersRating: '0',
  yaoi: false,
  yuri: false,
  teen: false,
  guro: false,
  furry: false,
  beast: false,
  male: false,
  female: false,
  futa: false,
  other: false,
  scat: false,
  incest: false,
  rape: false,
  media: '0',
  timeTaken: undefined,
  license: '0',
  reference: undefined,
};
