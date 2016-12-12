
describe("het beoordelen van een speculaas", function() {

	it("zou een hoge som moete zijn voor een Hasseltse speculaas met veel ingrediënten", function() {
		var hasseltseSpecuclaas = {
			boter: 500,
			bloem: 500,
			suiker: 1000,
			kruiden: 10,
			zout: 10,
			honing: 20,
			melk: 100,
			eieren: 120
		};
		var beoordeling = beoordeelSpeculaas(hasseltseSpecuclaas);

		expect(beoordeling).toBe(2260);
	});

	it("zou een lage som moeten zijn voor speculaas met minder ingredienten", function() {
		var goedkopeSpeculaas = {
			boter: 500,
			bloem: 500,
			suiker: 500,
			eieren: 60
		};
		var beoordeling = beoordeelSpeculaas(goedkopeSpeculaas);
		
		expect(beoordeling).toBe(1560);
	});

	it("zou het minimum moeten scoren voor speculaas zonder ingredienten", function() {
		expect(beoordeelSpeculaas({})).toBe(0);
	});

});

