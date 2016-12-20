<?php

require_once('speculaas.php');

class SpreadsheetTest extends PHPUnit_Framework_TestCase {

	public function test_zou_een_hoge_som_moeten_zijn_voor_een_Hasseltse_speculaas_met_veel_ingrediënten() {
		$hasseltseSpecuclaas = array(
			"boter" => 500,
			"bloem" => 500,
			"suiker" => 1000,
			"kruiden" => 10,
			"zout" => 10,
			"honing" => 20,
			"melk" => 100,
			"eieren" => 120
		);
		$beoordeling = beoordeelSpeculaas($hasseltseSpecuclaas);

		$this->assertEquals(2260, $beoordeling);
	}

	public function test_zou_een_lage_som_moeten_zijn_voor_speculaas_met_minder_ingredienten() {
		$goedkopeSpeculaas = array(
			"boter" => 500,
			"bloem" => 500,
			"suiker" => 500,
			"eieren" => 60
		);
		$beoordeling = beoordeelSpeculaas($goedkopeSpeculaas);

		$this->assertEquals(1560, $beoordeling);
	}

	public function test_zou_het_minimum_moeten_scoren_voor_speculaas_zonder_ingredienten() {
		$hasseltseSpecuclaas = array();
		$beoordeling = beoordeelSpeculaas($hasseltseSpecuclaas);

		$this->assertEquals(0, $beoordeling);
	}

}

?>