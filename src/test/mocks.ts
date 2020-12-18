import { v4 } from 'uuid';
import { User, Issuer } from '../types';

const now = new Date();

export const dummyUser: User = {
  uuid: v4(),
  name: 'Testy McTesterson',
  did: `did:unum:${v4()}`,
  createdAt: now,
  updatedAt: now,
  companyUuid: v4()
};

export const dummyIssuer: Issuer = {
  uuid: v4(),
  did: `did:unum:${v4()}`,
  createdAt: now,
  updatedAt: now,
  name: 'Dummy Issuer'
};
