import { addPerson, filterById } from "../../src/service/personServices";
import { GENDER, TYPE } from "../../src/types/person.type";

describe("test filterById function", () => {
  test("should return the element that matches the given Id", () => {
    //Given
    const id = 12;

    //When
    const result = filterById(id);

    //Then
    expect(result).toStrictEqual([
      {
        age: 8,
        gender: "male",
        id: 12,
        name: "Lucas Moore",
        type: "kid",
      },
    ]);
  });
  test("should return an empty array when no element macthes the id", () => {
    //Given
    const id = 20;

    //When
    const result = filterById(id);

    //Then
    expect(result).toStrictEqual([]);
  });
  test("should return an empty array if id is negative", () => {
    //Given
    const id = -1;

    //When
    const result = filterById(id);

    //Then
    expect(result).toStrictEqual([]);
  });
});

describe("addPerson", () => {
  it("should add a person to the list and return the updated list", () => {
    // Given
    const body = {
      id: 99999,
      name: "Adam Hamdi",
      age: 25,
      gender: GENDER.male,
      type: TYPE.men,
    };

    // When
    const result = addPerson(body);

    // Then
    expect(result).toContainEqual(body);
  });

  it("should return the full person list after adding", () => {
    // Given
    const body = {
      id: 99998,
      name: "Amelia Harris",
      age: 5,
      gender: GENDER.female,
      type: TYPE.kid,
    };

    // When
    const result = addPerson(body);

    // Then
    expect(result).toContainEqual(body);
  });
});
