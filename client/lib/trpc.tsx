import { createTRPCReact } from '@trpc/react-query';
//need to fix to have instance in front end
import type { AppRouter } from '../../server/src/router/index';

export const trpc = createTRPCReact<AppRouter>();