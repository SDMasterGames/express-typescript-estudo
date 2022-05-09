import { deleteUser } from "./deleteUser";
const createSpy = jest.fn();
const listSpy = jest.fn();
const deleteByIdSpy = jest.fn();
const findByIdSpy = jest
  .fn()
  .mockResolvedValueOnce({
    id: "test",
    name: "test",
  })
  .mockResolvedValueOnce(null);

const suit = new deleteUser({
  create: createSpy,
  List: listSpy,
  deleteById: deleteByIdSpy,
  findById: findByIdSpy,
});

describe("deleteUser", () => {
  it("Deletando um usuario com sucesso.", async () => {
    await expect(suit.execute("test")).resolves.not.toThrow();

    expect(findByIdSpy).toHaveBeenCalled();
    expect(deleteByIdSpy).toHaveBeenCalled();
  });
  it("Na ausensia de um id.", async () => {
    await expect(suit.execute("")).rejects.toThrow();
    
    expect(deleteByIdSpy).not.toHaveBeenCalled();
    expect(findByIdSpy).not.toHaveBeenCalled();
  });
  it("Na ausensia de um user.", async () => {
    await expect(suit.execute("dale")).rejects.toThrow();
    
    expect(findByIdSpy).toHaveBeenCalled();
    expect(deleteByIdSpy).not.toHaveBeenCalled();
  });
});
