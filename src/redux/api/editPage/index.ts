import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		postEdit: builder.mutation({
			query: (newData) => ({
				url: '',
				method: 'POST',
				body: newData
			}),
			invalidatesTags: ['api']
		}),

		getEdit: builder.query({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['api']
		}),
		patchEdit: builder.mutation<Edit.PutResponse, Edit.PutRequest>({
			query: ({ id, newImg }) => ({
				url: `${id}`,
				method: 'PATCH',
				body: { newImg }
			}),
			invalidatesTags: ['api']
		}),
		editPage: builder.mutation({
			query: (newData) => ({
				url: '/user-infos',
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`
				},
				body: newData
			}),
			invalidatesTags: ['post']
		})
	})
});

export const {
	useGetEditQuery,
	usePatchEditMutation,
	usePostEditMutation,
	useEditPageMutation
} = api;
