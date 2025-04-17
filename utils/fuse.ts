import { IFuseOptions } from 'fuse.js';
import { Projects } from '../generated/prisma';

export const fuseOptions: IFuseOptions<Projects> = {
  keys: ['pr', 'issues', 'repos'],
  threshold: 0.3,
};
