const filters = require("./filters")
// @ponicode
describe("filters.sortByAmount", () => {
    test("0", () => {
        let callFunction = () => {
            filters.sortByAmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filters.setStartDate", () => {
    test("0", () => {
        let callFunction = () => {
            filters.setStartDate("draft")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.setStartDate("processing")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.setStartDate("done")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.setStartDate("completed")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.setStartDate("pending")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filters.setStartDate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filters.setEndDate", () => {
    test("0", () => {
        let callFunction = () => {
            filters.setEndDate("01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.setEndDate("32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.setEndDate("01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.setEndDate("01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.setEndDate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
