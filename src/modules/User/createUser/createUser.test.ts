import { createUser } from "./createUser";

const createSpy = jest.fn();
const listSpy = jest.fn();
const deleteByIdSpy = jest.fn();
const findByIdSpy = jest.fn();

const suit = new createUser({
  create: createSpy,
  List: listSpy,
  deleteById: deleteByIdSpy,
  findById: findByIdSpy,
});

describe("createUser", () => {
  it("Criação de usuario com sucesso.", async () => {
    await expect(
      suit.execute({
        name: "Dale",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Falha na ausencia de nome", async () => {
    await expect(
      suit.execute({
        name: "",
      })
    ).rejects.toThrow();
    expect(createSpy).not.toHaveBeenCalled();
  });
});
