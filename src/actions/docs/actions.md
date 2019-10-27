# Actions

## Types

Actions will have three types, REQUEST, SUCCESS, FAILURE these represent
the request for data and either a failure or success scenario. This allows
us to update redux accordingly.

## CALL_API

To get caught by the API middleware we need to use the CALL_API constant from the
types file.

## API call structure

Below is an example return for an action intending to interact with
the API.

```

{
  [CALL_API]: {
    endpoint: '/',
    method: 'POST',
    body: {},
    types: [REQUEST, SUCCESS, FAILURE],
  },
}

```

CALL_API - constant indicating to the middleware that action is wanting
to fetch data from the backend.

endpoint - endpoint of the call

method - GET, POST etc. the method of the api call

body - The fields sent for either a PUT or POST request

query - The query for a GET request

types - As described above, must occur in this order due to array destructuring.

## Non-API calls

If you are not calling the API the structure is

```

{
  type: TYPE,
  payload: data
}

```

type is a constant to get caught by the reduscers and data is the data sent
to those reducers.
