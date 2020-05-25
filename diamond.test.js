const {diamond, edge} = require ('./diamond')

describe ("diamond", () => {
    it ("it should output A for A", () => {
        expect (diamond ("A")).toEqual("A")
    })
    describe ("edge", () => {
        it ("should return -A\nB- for B", () => {
            expect (edge("B")).toEqual(["-A",
                                         "B-"])
        })
        describe ("diamond", () => {
            it ("it should output --A--\n-B-B-\nC---C\n-B-B-\n--A-- for C", () => {
                expect (diamond ("C")).toEqual(["--A--" , "-B-B-", "C---C", "-B-B-", "--A--"])
            })
        })

    })
})
