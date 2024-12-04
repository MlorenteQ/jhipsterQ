import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd5e10a3a-aaf9-426a-bed7-2e4d94429ba8',
};

export const sampleWithPartialData: IAuthority = {
  name: '892ba26f-ee78-443a-8875-2e3ebb202b83',
};

export const sampleWithFullData: IAuthority = {
  name: '533ece21-3b26-46d3-bfdd-0c30be559f73',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
