import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  requestUrl: string | undefined
): Promise<PodcastTransferModel> => {
  //define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // extrai query param podcastName de requestUrl
  let podcastQuery = "";
  try {
    if (requestUrl) {
      const url = new URL(requestUrl, "http://localhost");
      podcastQuery = url.searchParams.get("podcastName") || "";
    }
  } catch (e) {
    podcastQuery = "";
  }

  const data = await repositoryPodcast(podcastQuery);

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};
