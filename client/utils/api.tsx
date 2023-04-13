import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {httpBatchLink} from '@trpc/react-query';
import { TRPC_URL } from '@env';
import { createTRPCReact } from '@trpc/react-query';
//need to fix to have instance in front end
import type { AppRouter } from '../../server/src/router/index';
export { type RouterInputs, type RouterOutputs } from "../../server/src/router/index";

export const api = createTRPCReact<AppRouter>();

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
      api.createClient({
        links: [httpBatchLink({ url: TRPC_URL })],
      }),
    );
  
    return (
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </api.Provider>
    );
  };