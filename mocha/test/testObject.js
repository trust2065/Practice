import { expect } from "chai";

const obj = {id: 1,name: "Super"}

describe("Object comparison", function() {
    it("should return equal when object are the same", function() {
        expect(obj).to.deep.equal({
            id: 1,
            name: "Super"
        });
    });
    it("should return not equal when object are different", function() {
        expect(obj).to.deep.not.equal({
            id: 100,
            name: "Poor"
        });
    });
})
