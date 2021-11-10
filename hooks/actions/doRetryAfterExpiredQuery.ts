interface ShouldRetryAfterExpiredQueryArgs {
  errorMessage: string;
  doRetryAfterExpiredQuery: boolean;
}

export const shouldRetryAfterExpiredQuery = ({errorMessage, doRetryAfterExpiredQuery}: ShouldRetryAfterExpiredQueryArgs) => {
  return (
    errorMessage?.toLowerCase()?.indexOf('unknown query id') > -1
        && errorMessage?.toLowerCase()?.indexOf('it may have expired') > -1
        && !doRetryAfterExpiredQuery
  )
};

export const doRetryAfterExpiredQueryAction = (retries: number) => ({
  type: 'fetchResultsExpiredQuery',
  payload: {retries}
})
