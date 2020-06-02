import mockAxios from 'axios';

import {fetchData} from '../src/utils/fetch-data';

jest.mock('axios');

it('fetches advice from API', async () => {
  // setup
  mockAxios.get.mockImplementation(() =>
    Promise.resolve({
      data: {
        slip: {
          id: 123,
          advice: "Don't feed Mogwais after midnight.",
        },
      },
    }),
  );

  // work
  const advice = await fetchData();

  // expect
  expect(advice).toEqual({
    id: 123,
    advice: "Don't feed Mogwais after midnight.",
  });
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
