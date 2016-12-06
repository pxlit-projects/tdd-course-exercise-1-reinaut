# TDD Lab Exercise 1

Oefeningen voor http://wgroeneveld.github.io/tdd-course

## Technologie

In Javascript. Test Harnas met Jasmine. [Zie ook Jasmine documentatie](https://jasmine.github.io/).

## Opdracht beschrijving

### Wat moet ik doen?

De Artisanale bakkersvereniging vertrouwt op jullie technische kunde om een oplossing te voorzien voor hun probleem. Er wordt veel Hasseltse speculaas gebakken maar niemand weet exact wat nu de béste speculaas is. Schrijf een methode die de speculaas evalueert, gebaseerd op de ingrediënten. De functie ziet er als volgt uit:

```javascript
	function beoordeelSpeculaas(speculaas) {
		...
	}
```

De functie geeft een getal terug. Hoe hoger het getal, hoe beter de score en hoe blijer de bakker. 
Het argument, speculaas, kan de volgende properties hebben: kruiden, boter, suiker, eieren, melk, honing, bloem, zout, rijsmiddel. Elke property is een getal dat de hoeveelheid uitdrukt in gram. Bijvoorbeeld:

```javascript
{
    boter: 250,
    bloem: 1000,
    zout: 10,
    melk: 100
};
```

**Hoe weet ik nu welke speculaas beter scoort?** Tel gewoon alle ingrediënten op. Maak het niet te moeilijk.

Een voorbeeld van hoe de methode gebruikt kan worden zie je in de test code.
Source in `exercise.js` typen, testen in `tests.js`.

### Unit testen

Er zijn reeds een aantal unit testen voorzien. Deze kan je laten lopen door runtests.html in een browser uit te voeren. Kijk gerust naar de testen en vergeet niet om er bij te schrijven wanneer nodig!

**Wat moet ik nu precies testen?** Wat dacht je van een industriële speculaas zonder kruiden, of eentje met alles er op en er aan? Wat doet je functie indien de speculaas `undefined` of `null` is? Wat doet die indien een speculaas zonder ingrediënten doorgegeven wordt? Alle uitzonderingsgevallen dus zeker behandelen. De nadruk ligt op de testen, niet op de implementatie!
