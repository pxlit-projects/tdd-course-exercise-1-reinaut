using NUnit.Framework;

namespace Speculaas.UnitTests
{
    [TestFixture]
    public class HasseltseSpeculaasTests
    {
        [Test]
        public void BeoordeelSpeculaas_IsHogeSom_VoorVeelIngredienten()
        {
            var beoordeling = Beoordeler.BeoordeelSpeculaas(new HasseltseSpeculaas
            {
                Boter: 500,
                Bloem: 500,
                Suiker: 1000,
                Kruiden: 10,
                Zout: 10,
                Honing: 20,
                Melk: 100,
                EIeren: 120
            });

            Assert.That(beoordeling, Is.EqualTo(2260));
        }

    [Test]
    public void BeoordeelSpeculaas_IsLageSom_VoorSpeculaasMetMinderIngredienten()
    {
        var beoordeling = Beoordeler.BeoordeelSpeculaas(new HasseltseSpeculaas
            {
                Boter: 500,
                Bloem: 500,
                Suiker: 500,
                EIeren: 60
            });

            Assert.That(beoordeling, Is.EqualTo(1560));
        }

[Test]
public void BeoordeelSpeculaas_ScoortMinimumVoorSpeculaasZonderIngredienten()
{
    var beoordeling = Beoordeler.BeoordeelSpeculaas(new HasseltseSpeculaas());

    Assert.That(beoordeling, Is.EqualTo(0));
}
    }
}