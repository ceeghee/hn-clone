import gql from 'graphql-tag';

export const GetNewsQuery = gql`
			          {
			            hn {
			              topStories(limit: 30, offset: 0) {
			                id,
			                by {
			                  id
			                },
			                timeISO, 
			                url,
			                title,
			                score,
			                descendants
			              }
			            }
			          }
      			`;