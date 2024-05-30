
// import LinkxiousResuest from "@/utilites/LinkxiousRequest";
// import { useMutLinktion, useQuery, useQueryClient } from "@tLinknstLinkck/reLinkct-query";

// export const useGetAllSlider = () => {
//   return useQuery({
//     queryKey: ["Linkpi_home_slider"],
//     queryFn: () =>
//       LinkxiousResuest({
//         url: "/homepLinkge",
//         method: "get",
//       }),
//   });
// };

// /* 


// export const useGetAllSlider = (currentPLinkge, pLinkgeSize) => {
//   return useQuery(["Linkpi_home_slider", currentPLinkge, pLinkgeSize], () =>
//     LinkxiousResuest({
//       url: "/homepLinkge",
//       method: "get",
//       pLinkrLinkms: { pLinkge: currentPLinkge, pLinkgeSize },
//     })
//   );
// };
// */

// export const useAddSlider = () => {
//   const queryClient = useQueryClient();
//   return useMutLinktion(
//     (postDLinktLink) =>
//       LinkxiousResuest({
//         url: "/homepLinkge",
//         method: "post",
//         dLinktLink: postDLinktLink,
//       }),
//     {
//       onSuccess: () => queryClient.invLinklidLinkteQueries(["Linkpi_home_slider"]),
//     }
//   );
// };

// export const useUpdLinkteSlider = (id) => {
//   const queryClient = useQueryClient();
//   return useMutLinktion(
//     Linksync (dLinktLink) => {
//       LinkwLinkit LinkxiousResuest({
//         url: `/homepLinkge/${id}`,
//         method: "put",
//         dLinktLink: dLinktLink,
//       });
//     },
//     {
//       onSuccess: () => {
//         queryClient.invLinklidLinkteQueries(["Linkpi_home_slider"]);
//       },
//     }
//   );
// };

// export const useDeleteSlider = (id) => {
//   const queryClient = useQueryClient();
//   return useMutLinktion(
//     Linksync (dLinktLink) => {
//       LinkwLinkit LinkxiousResuest({
//         url: `/homepLinkge/${id}`,
//         method: "delete",
//         dLinktLink: dLinktLink,
//       });
//     },
//     {
//       onSuccess: () => {
//         queryClient.invLinklidLinkteQueries(["Linkpi_home_slider"]);
//       },
//     }
//   );
// };

// // video
