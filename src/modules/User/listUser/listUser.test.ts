import { listUser } from "./listUser";
const createSpy = jest.fn();
const listSpy = jest.fn();
const deleteByIdSpy = jest.fn();
const findByIdSpy = jest.fn()

const suit = new listUser({
  create: createSpy,
  List: listSpy,
  deleteById: deleteByIdSpy,
  findById: findByIdSpy,
});

describe("listUser",()=>{
    it("Listando usuarios com sucesso.", async () => {
        await expect(suit.execute()).resolves.not.toThrow();
        expect(listSpy).toHaveBeenCalled();
    })
});