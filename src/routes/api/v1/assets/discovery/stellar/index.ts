import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { listAssets } from "@/server/api/assets";
import { parseSearchParams } from "@/server/api/request";
import { apiSuccess, handleApiRequest } from "@/server/api/response";

const querySchema = z.object({
  q: z.string().trim().min(1).max(100).optional(),
});

export const Route = createFileRoute("/api/v1/assets/discovery/stellar/")({
  server: {
    handlers: {
      GET: ({ request }) =>
        handleApiRequest(request, () => {
          const { q } = parseSearchParams(request, querySchema);
          const assets = listAssets(q);
          return apiSuccess(request, { assets, total: assets.length });
        }),
    },
  },
});
