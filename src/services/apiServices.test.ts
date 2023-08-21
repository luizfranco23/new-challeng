import axios from "axios";
import { fetchProductsFromAPI } from "./apiServices";

jest.mock("axios", () => ({
  get: jest.fn(async () => await Promise.resolve({ data: { items: [] } })),
  create: jest.fn(() => ({
    get: jest.fn(async () => await Promise.resolve({ data: { items: [] } })),
  })),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getProducts", () => {
  it("should return api data", async () => {
    mockedAxios.get.mockResolvedValue({ data: { items: [] } });

    const result = await fetchProductsFromAPI();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://localhost:3000/products"
    );
    expect(result).toEqual([]);
  });
});
