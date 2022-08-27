import React from "react";
import PageTemplate from '../components/templateCastListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getCastMembers } from "../api/tmdb-api";
import { withRouter } from "react-router-dom";

const CastMembersPage = (props) => {
    const { id } = props.match.params;
    // console.log(id)
      const {  data, error, isLoading, isError }  = useQuery(["castmembers", { id: id}], getCastMembers);
  
          if (isLoading) {
              return <Spinner />
            }
          
            ;if (isError) {
              return <h1>{error.message}</h1>
            }
            const castmember = data.cast;
  
            return (
              <PageTemplate
                title="Cast Members"
                castmembers={castmember}
                />
            );
              };
              export default withRouter(CastMembersPage);
