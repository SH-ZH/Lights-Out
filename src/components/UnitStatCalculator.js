import React from 'react';
import ClosedInput from './ClosedInput.js';
import OpenInput from './OpenInput.js';
import TableHead from './TableHead.js';
import RowHead from './RowHead.js';
import GearTableHeader from './GearTableHeader.js';
import UnitEnchant from './UnitEnchant.js';

let en = require('../languages/en.json');
let jp = require('../languages/jp.json');

class UnitStatCalculator extends React.Component {
	constructor(props) {
		super(props);
		// Character Base Stat
		this.updateHP = this.updateHP.bind(this);
		this.updateAtk = this.updateAtk.bind(this);
		this.updateMag = this.updateMag.bind(this);
		this.updateDef = this.updateDef.bind(this);
		this.updateMDef = this.updateMDef.bind(this);
		this.updateSkill = this.updateSkill.bind(this);
		
		// Equipment Base Stat
		this.updateHPWeaponStat = this.updateHPWeaponStat.bind(this);
		this.updateHPArmorStat = this.updateHPArmorStat.bind(this);
		this.updateHPHelmetStat = this.updateHPHelmetStat.bind(this);
		this.updateHPAccStat = this.updateHPAccStat.bind(this);
		this.updateHPMasteryStat = this.updateHPMasteryStat.bind(this);
		
		this.updateAtkWeaponStat = this.updateAtkWeaponStat.bind(this);
		this.updateAtkArmorStat = this.updateAtkArmorStat.bind(this);
		this.updateAtkHelmetStat = this.updateAtkHelmetStat.bind(this);
		this.updateAtkAccStat = this.updateAtkAccStat.bind(this);
		this.updateAtkMasteryStat = this.updateAtkMasteryStat.bind(this);		

		this.updateMagWeaponStat = this.updateMagWeaponStat.bind(this);
		this.updateMagArmorStat = this.updateMagArmorStat.bind(this);
		this.updateMagHelmetStat = this.updateMagHelmetStat.bind(this);
		this.updateMagAccStat = this.updateMagAccStat.bind(this);
		this.updateMagMasteryStat = this.updateMagMasteryStat.bind(this);		
		
		this.updateDefWeaponStat = this.updateDefWeaponStat.bind(this);
		this.updateDefArmorStat = this.updateDefArmorStat.bind(this);
		this.updateDefHelmetStat = this.updateDefHelmetStat.bind(this);
		this.updateDefAccStat = this.updateDefAccStat.bind(this);
		this.updateDefMasteryStat = this.updateDefMasteryStat.bind(this);		

		this.updateMDefWeaponStat = this.updateMDefWeaponStat.bind(this);
		this.updateMDefArmorStat = this.updateMDefArmorStat.bind(this);
		this.updateMDefHelmetStat = this.updateMDefHelmetStat.bind(this);
		this.updateMDefAccStat = this.updateMDefAccStat.bind(this);
		this.updateMDefMasteryStat = this.updateMDefMasteryStat.bind(this);		

		this.updateSkillWeaponStat = this.updateSkillWeaponStat.bind(this);
		this.updateSkillArmorStat = this.updateSkillArmorStat.bind(this);
		this.updateSkillHelmetStat = this.updateSkillHelmetStat.bind(this);
		this.updateSkillAccStat = this.updateSkillAccStat.bind(this);
		this.updateSkillMasteryStat = this.updateSkillMasteryStat.bind(this);	

		// Equipment Skill
		this.updateHPWeaponSkill = this.updateHPWeaponSkill.bind(this);
		this.updateHPArmorSkill = this.updateHPArmorSkill.bind(this);
		this.updateHPHelmetSkill = this.updateHPHelmetSkill.bind(this);
		this.updateHPAccSkill = this.updateHPAccSkill.bind(this);
		
		this.updateAtkWeaponSkill = this.updateAtkWeaponSkill.bind(this);
		this.updateAtkArmorSkill = this.updateAtkArmorSkill.bind(this);
		this.updateAtkHelmetSkill = this.updateAtkHelmetSkill.bind(this);
		this.updateAtkAccSkill = this.updateAtkAccSkill.bind(this);

		this.updateMagWeaponSkill = this.updateMagWeaponSkill.bind(this);
		this.updateMagArmorSkill = this.updateMagArmorSkill.bind(this);
		this.updateMagHelmetSkill = this.updateMagHelmetSkill.bind(this);
		this.updateMagAccSkill = this.updateMagAccSkill.bind(this);
		
		this.updateDefWeaponSkill = this.updateDefWeaponSkill.bind(this);
		this.updateDefArmorSkill = this.updateDefArmorSkill.bind(this);
		this.updateDefHelmetSkill = this.updateDefHelmetSkill.bind(this);
		this.updateDefAccSkill = this.updateDefAccSkill.bind(this);

		this.updateMDefWeaponSkill = this.updateMDefWeaponSkill.bind(this);
		this.updateMDefArmorSkill = this.updateMDefArmorSkill.bind(this);
		this.updateMDefHelmetSkill = this.updateMDefHelmetSkill.bind(this);
		this.updateMDefAccSkill = this.updateMDefAccSkill.bind(this);

		this.updateSkillWeaponSkill = this.updateSkillWeaponSkill.bind(this);
		this.updateSkillArmorSkill = this.updateSkillArmorSkill.bind(this);
		this.updateSkillHelmetSkill = this.updateSkillHelmetSkill.bind(this);
		this.updateSkillAccSkill = this.updateSkillAccSkill.bind(this);
		
		// Equipment Enchant
		this.updateHPWeaponPercentEnchant = this.updateHPWeaponPercentEnchant.bind(this);
		this.updateHPArmorPercentEnchant = this.updateHPArmorPercentEnchant.bind(this);
		this.updateHPHelmetPercentEnchant = this.updateHPHelmetPercentEnchant.bind(this);
		this.updateHPAccPercentEnchant = this.updateHPAccPercentEnchant.bind(this);
		this.updateHPWeaponFlatEnchant = this.updateHPWeaponFlatEnchant.bind(this);
		this.updateHPArmorFlatEnchant = this.updateHPArmorFlatEnchant.bind(this);
		this.updateHPHelmetFlatEnchant = this.updateHPHelmetFlatEnchant.bind(this);
		this.updateHPAccFlatEnchant = this.updateHPAccFlatEnchant.bind(this);		
		
		this.updateAtkWeaponPercentEnchant = this.updateAtkWeaponPercentEnchant.bind(this);
		this.updateAtkArmorPercentEnchant = this.updateAtkArmorPercentEnchant.bind(this);
		this.updateAtkHelmetPercentEnchant = this.updateAtkHelmetPercentEnchant.bind(this);
		this.updateAtkAccPercentEnchant = this.updateAtkAccPercentEnchant.bind(this);
		this.updateAtkWeaponFlatEnchant = this.updateAtkWeaponFlatEnchant.bind(this);
		this.updateAtkArmorFlatEnchant = this.updateAtkArmorFlatEnchant.bind(this);
		this.updateAtkHelmetFlatEnchant = this.updateAtkHelmetFlatEnchant.bind(this);
		this.updateAtkAccFlatEnchant = this.updateAtkAccFlatEnchant.bind(this);		

		this.updateMagWeaponPercentEnchant = this.updateMagWeaponPercentEnchant.bind(this);
		this.updateMagArmorPercentEnchant = this.updateMagArmorPercentEnchant.bind(this);
		this.updateMagHelmetPercentEnchant = this.updateMagHelmetPercentEnchant.bind(this);
		this.updateMagAccPercentEnchant = this.updateMagAccPercentEnchant.bind(this);
		this.updateMagWeaponFlatEnchant = this.updateMagWeaponFlatEnchant.bind(this);
		this.updateMagArmorFlatEnchant = this.updateMagArmorFlatEnchant.bind(this);
		this.updateMagHelmetFlatEnchant = this.updateMagHelmetFlatEnchant.bind(this);
		this.updateMagAccFlatEnchant = this.updateMagAccFlatEnchant.bind(this);			
		
		this.updateDefWeaponPercentEnchant = this.updateDefWeaponPercentEnchant.bind(this);
		this.updateDefArmorPercentEnchant = this.updateDefArmorPercentEnchant.bind(this);
		this.updateDefHelmetPercentEnchant = this.updateDefHelmetPercentEnchant.bind(this);
		this.updateDefAccPercentEnchant = this.updateDefAccPercentEnchant.bind(this);
		this.updateDefWeaponFlatEnchant = this.updateDefWeaponFlatEnchant.bind(this);
		this.updateDefArmorFlatEnchant = this.updateDefArmorFlatEnchant.bind(this);
		this.updateDefHelmetFlatEnchant = this.updateDefHelmetFlatEnchant.bind(this);
		this.updateDefAccFlatEnchant = this.updateDefAccFlatEnchant.bind(this);			

		this.updateMDefWeaponPercentEnchant = this.updateMDefWeaponPercentEnchant.bind(this);
		this.updateMDefArmorPercentEnchant = this.updateMDefArmorPercentEnchant.bind(this);
		this.updateMDefHelmetPercentEnchant = this.updateMDefHelmetPercentEnchant.bind(this);
		this.updateMDefAccPercentEnchant = this.updateMDefAccPercentEnchant.bind(this);
		this.updateMDefWeaponFlatEnchant = this.updateMDefWeaponFlatEnchant.bind(this);
		this.updateMDefArmorFlatEnchant = this.updateMDefArmorFlatEnchant.bind(this);
		this.updateMDefHelmetFlatEnchant = this.updateMDefHelmetFlatEnchant.bind(this);
		this.updateMDefAccFlatEnchant = this.updateMDefAccFlatEnchant.bind(this);			

		this.updateSkillWeaponPercentEnchant = this.updateSkillWeaponPercentEnchant.bind(this);
		this.updateSkillArmorPercentEnchant = this.updateSkillArmorPercentEnchant.bind(this);
		this.updateSkillHelmetPercentEnchant = this.updateSkillHelmetPercentEnchant.bind(this);
		this.updateSkillAccPercentEnchant = this.updateSkillAccPercentEnchant.bind(this);
		this.updateSkillWeaponFlatEnchant = this.updateSkillWeaponFlatEnchant.bind(this);
		this.updateSkillArmorFlatEnchant = this.updateSkillArmorFlatEnchant.bind(this);
		this.updateSkillHelmetFlatEnchant = this.updateSkillHelmetFlatEnchant.bind(this);
		this.updateSkillAccFlatEnchant = this.updateSkillAccFlatEnchant.bind(this);		

		// Others
		this.updateHPBuff = this.updateHPBuff.bind(this);		
		this.updateAtkBuff = this.updateAtkBuff.bind(this);		
		this.updateMagBuff = this.updateMagBuff.bind(this);		
		this.updateDefBuff = this.updateDefBuff.bind(this);		
		this.updateMDefBuff = this.updateMDefBuff.bind(this);		
		this.updateSkillBuff = this.updateSkillBuff.bind(this);		
		
		this.updateHPPassive = this.updateHPPassive.bind(this);		
		this.updateAtkPassive = this.updateAtkPassive.bind(this);		
		this.updateMagPassive = this.updateMagPassive.bind(this);		
		this.updateDefPassive = this.updateDefPassive.bind(this);		
		this.updateMDefPassive = this.updateMDefPassive.bind(this);		
		this.updateSkillPassive = this.updateSkillPassive.bind(this);		

		this.updateHPPvP = this.updateHPPvP.bind(this);		
		this.updateAtkPvP = this.updateAtkPvP.bind(this);		
		this.updateMagPvP = this.updateMagPvP.bind(this);		
		this.updateDefPvP = this.updateDefPvP.bind(this);		
		this.updateMDefPvP = this.updateMDefPvP.bind(this);		
		this.updateSkillPvP = this.updateSkillPvP.bind(this);	
		
		this.updateEnchantType = this.updateEnchantType.bind(this);			
						
		this.state = {
			language: this.props.language,
			// Character Base Stat
			hp_base: '',
			atk_base: '',
			mag_base: '',
			def_base: '',
			mdef_base: '',
			skill_base: '',
			
			// Equipment Base Stat
			hp_weapon_stat: '',
			hp_armor_stat: '',
			hp_helmet_stat: '',
			hp_acc_stat: '',
			hp_mastery_stat: '',
			
			atk_weapon_stat: '',
			atk_armor_stat: '',
			atk_helmet_stat: '',
			atk_acc_stat: '',
			atk_mastery_stat: '',	
			
			mag_weapon_stat: '',
			mag_armor_stat: '',
			mag_helmet_stat: '',
			mag_acc_stat: '',
			mag_mastery_stat: '',				

			def_weapon_stat: '',
			def_armor_stat: '',
			def_helmet_stat: '',
			def_acc_stat: '',
			def_mastery_stat: '',	

			mdef_weapon_stat: '',
			mdef_armor_stat: '',
			mdef_helmet_stat: '',
			mdef_acc_stat: '',
			mdef_mastery_stat: '',		

			skill_weapon_stat: '',
			skill_armor_stat: '',
			skill_helmet_stat: '',
			skill_acc_stat: '',
			skill_mastery_stat: '',		

			// Equipment Skill
			hp_weapon_skill: '',
			hp_armor_skill: '',
			hp_helmet_skill: '',
			hp_acc_skill: '',
			
			atk_weapon_skill: '',
			atk_armor_skill: '',
			atk_helmet_skill: '',
			atk_acc_skill: '',
			
			mag_weapon_skill: '',
			mag_armor_skill: '',
			mag_helmet_skill: '',
			mag_acc_skill: '',

			def_weapon_skill: '',
			def_armor_skill: '',
			def_helmet_skill: '',
			def_acc_skill: '',

			mdef_weapon_skill: '',
			mdef_armor_skill: '',
			mdef_helmet_skill: '',
			mdef_acc_skill: '',

			skill_weapon_skill: '',
			skill_armor_skill: '',
			skill_helmet_skill: '',
			skill_acc_skill: '',
			
			// Equipment Enchant
			hp_weapon_percent_enchant: '',
			hp_armor_percent_enchant: '',
			hp_helmet_percent_enchant: '',
			hp_acc_percent_enchant: '',
			hp_weapon_flat_enchant: '',
			hp_armor_flat_enchant: '',
			hp_helmet_flat_enchant: '',
			hp_acc_flat_enchant: '',			
			
			atk_weapon_percent_enchant: '',
			atk_armor_percent_enchant: '',
			atk_helmet_percent_enchant: '',
			atk_acc_percent_enchant: '',
			atk_weapon_flat_enchant: '',
			atk_armor_flat_enchant: '',
			atk_helmet_flat_enchant: '',
			atk_acc_flat_enchant: '',			
			
			mag_weapon_percent_enchant: '',
			mag_armor_percent_enchant: '',
			mag_helmet_percent_enchant: '',
			mag_acc_percent_enchant: '',
			mag_weapon_flat_enchant: '',
			mag_armor_flat_enchant: '',
			mag_helmet_flat_enchant: '',
			mag_acc_flat_enchant: '',				

			def_weapon_percent_enchant: '',
			def_armor_percent_enchant: '',
			def_helmet_percent_enchant: '',
			def_acc_percent_enchant: '',
			def_weapon_flat_enchant: '',
			def_armor_flat_enchant: '',
			def_helmet_flat_enchant: '',
			def_acc_flat_enchant: '',				

			mdef_weapon_percent_enchant: '',
			mdef_armor_percent_enchant: '',
			mdef_helmet_percent_enchant: '',
			mdef_acc_percent_enchant: '',
			mdef_weapon_flat_enchant: '',
			mdef_armor_flat_enchant: '',
			mdef_helmet_flat_enchant: '',
			mdef_acc_flat_enchant: '',				

			skill_weapon_percent_enchant: '',
			skill_armor_percent_enchant: '',
			skill_helmet_percent_enchant: '',
			skill_acc_percent_enchant: '',	
			skill_weapon_flat_enchant: '',
			skill_armor_flat_enchant: '',
			skill_helmet_flat_enchant: '',
			skill_acc_flat_enchant: '',		

			// Others
			hp_buff: '',
			atk_buff: '',
			mag_buff: '',
			def_buff: '',
			mdef_buff: '',
			skill_buff: '',
			
			hp_passive: '',
			atk_passive: '',
			mag_passive: '',
			def_passive: '',
			mdef_passive: '',
			skill_passive: '',
			
			hp_pvp: '',
			atk_pvp: '',
			mag_pvp: '',
			def_pvp: '',
			mdef_pvp: '',
			skill_pvp: '',
			
			enchant_type: 'roughsea'			
		};
	}
		
	static getDerivedStateFromProps(props, state) {
		return {language: props.language };
	}	
	
	// Character Base Stat
	updateHP(stat) {
		this.setState({ hp_base: stat });
	}
	updateAtk(stat) {
		this.setState({ atk_base: stat });
	}
	updateMag(stat) {
		this.setState({ mag_base: stat });
	}
	updateDef(stat) {
		this.setState({ def_base: stat });
	}
	updateMDef(stat) {
		this.setState({ mdef_base: stat });
	}
	updateSkill(stat) {
		this.setState({ skill_base: stat });
	}

	// Equipment Base Stat
	updateHPWeaponStat(stat) {
		this.setState({ hp_weapon_stat : stat });
	}
	updateHPArmorStat(stat) {
		this.setState({ hp_armor_stat : stat });
	}
	updateHPHelmetStat(stat) {
		this.setState({ hp_helmet_stat : stat });
	}
	updateHPAccStat(stat) {
		this.setState({ hp_acc_stat : stat });
	}
	updateHPMasteryStat(stat) {
		this.setState({ hp_mastery_stat : stat });
	}	
	
	updateAtkWeaponStat(stat) {
		this.setState({ atk_weapon_stat : stat });
	}
	updateAtkArmorStat(stat) {
		this.setState({ atk_armor_stat : stat });
	}
	updateAtkHelmetStat(stat) {
		this.setState({ atk_helmet_stat : stat });
	}
	updateAtkAccStat(stat) {
		this.setState({ atk_acc_stat : stat });
	}
	updateAtkMasteryStat(stat) {
		this.setState({ atk_mastery_stat : stat });
	}	
	
	updateMagWeaponStat(stat) {
		this.setState({ mag_weapon_stat : stat });
	}
	updateMagArmorStat(stat) {
		this.setState({ mag_armor_stat : stat });
	}
	updateMagHelmetStat(stat) {
		this.setState({ mag_helmet_stat : stat });
	}
	updateMagAccStat(stat) {
		this.setState({ mag_acc_stat : stat });
	}
	updateMagMasteryStat(stat) {
		this.setState({ mag_mastery_stat : stat });
	}		
	
	updateDefWeaponStat(stat) {
		this.setState({ def_weapon_stat : stat });
	}
	updateDefArmorStat(stat) {
		this.setState({ def_armor_stat : stat });
	}
	updateDefHelmetStat(stat) {
		this.setState({ def_helmet_stat : stat });
	}
	updateDefAccStat(stat) {
		this.setState({ def_acc_stat : stat });
	}
	updateDefMasteryStat(stat) {
		this.setState({ def_mastery_stat : stat });
	}	
	
	updateMDefWeaponStat(stat) {
		this.setState({ mdef_weapon_stat : stat });
	}
	updateMDefArmorStat(stat) {
		this.setState({ mdef_armor_stat : stat });
	}
	updateMDefHelmetStat(stat) {
		this.setState({ mdef_helmet_stat : stat });
	}
	updateMDefAccStat(stat) {
		this.setState({ mdef_acc_stat : stat });
	}
	updateMDefMasteryStat(stat) {
		this.setState({ mdef_mastery_stat : stat });
	}		
	
	updateSkillWeaponStat(stat) {
		this.setState({ skill_weapon_stat : stat });
	}
	updateSkillArmorStat(stat) {
		this.setState({ skill_armor_stat : stat });
	}
	updateSkillHelmetStat(stat) {
		this.setState({ skill_helmet_stat : stat });
	}
	updateSkillAccStat(stat) {
		this.setState({ skill_acc_stat : stat });
	}
	updateSkillMasteryStat(stat) {
		this.setState({ skill_mastery_stat : stat });
	}		
	
	// Equipment Skill
	updateHPWeaponSkill(stat) {
		this.setState({ hp_weapon_skill : stat });
	}
	updateHPArmorSkill(stat) {
		this.setState({ hp_armor_skill : stat });
	}
	updateHPHelmetSkill(stat) {
		this.setState({ hp_helmet_skill : stat });
	}
	updateHPAccSkill(stat) {
		this.setState({ hp_acc_skill : stat });
	}
	
	updateAtkWeaponSkill(stat) {
		this.setState({ atk_weapon_skill : stat });
	}
	updateAtkArmorSkill(stat) {
		this.setState({ atk_armor_skill : stat });
	}
	updateAtkHelmetSkill(stat) {
		this.setState({ atk_helmet_skill : stat });
	}
	updateAtkAccSkill(stat) {
		this.setState({ atk_acc_skill : stat });
	}
	
	updateMagWeaponSkill(stat) {
		this.setState({ mag_weapon_skill : stat });
	}
	updateMagArmorSkill(stat) {
		this.setState({ mag_armor_skill : stat });
	}
	updateMagHelmetSkill(stat) {
		this.setState({ mag_helmet_skill : stat });
	}
	updateMagAccSkill(stat) {
		this.setState({ mag_acc_skill : stat });
	}		
	
	updateDefWeaponSkill(stat) {
		this.setState({ def_weapon_skill : stat });
	}
	updateDefArmorSkill(stat) {
		this.setState({ def_armor_skill : stat });
	}
	updateDefHelmetSkill(stat) {
		this.setState({ def_helmet_skill : stat });
	}
	updateDefAccSkill(stat) {
		this.setState({ def_acc_skill : stat });
	}
	
	updateMDefWeaponSkill(stat) {
		this.setState({ mdef_weapon_skill : stat });
	}
	updateMDefArmorSkill(stat) {
		this.setState({ mdef_armor_skill : stat });
	}
	updateMDefHelmetSkill(stat) {
		this.setState({ mdef_helmet_skill : stat });
	}
	updateMDefAccSkill(stat) {
		this.setState({ mdef_acc_skill : stat });
	}	
	
	updateSkillWeaponSkill(stat) {
		this.setState({ skill_weapon_skill : stat });
	}
	updateSkillArmorSkill(stat) {
		this.setState({ skill_armor_skill : stat });
	}
	updateSkillHelmetSkill(stat) {
		this.setState({ skill_helmet_skill : stat });
	}
	updateSkillAccSkill(stat) {
		this.setState({ skill_acc_skill : stat });
	}	
	
	// Equipment Enchant
	updateHPWeaponPercentEnchant(stat) {
		this.setState({ hp_weapon_percent_enchant : stat });
	}
	updateHPArmorPercentEnchant(stat) {
		this.setState({ hp_armor_percent_enchant : stat });
	}
	updateHPHelmetPercentEnchant(stat) {
		this.setState({ hp_helmet_percent_enchant : stat });
	}
	updateHPAccPercentEnchant(stat) {
		this.setState({ hp_acc_percent_enchant : stat });
	}
	updateHPWeaponFlatEnchant(stat) {
		this.setState({ hp_weapon_flat_enchant : stat });
	}
	updateHPArmorFlatEnchant(stat) {
		this.setState({ hp_armor_flat_enchant : stat });
	}
	updateHPHelmetFlatEnchant(stat) {
		this.setState({ hp_helmet_flat_enchant : stat });
	}
	updateHPAccFlatEnchant(stat) {
		this.setState({ hp_acc_flat_enchant : stat });
	}	
	
	updateAtkWeaponPercentEnchant(stat) {
		this.setState({ atk_weapon_percent_enchant : stat });
	}
	updateAtkArmorPercentEnchant(stat) {
		this.setState({ atk_armor_percent_enchant : stat });
	}
	updateAtkHelmetPercentEnchant(stat) {
		this.setState({ atk_helmet_percent_enchant : stat });
	}
	updateAtkAccPercentEnchant(stat) {
		this.setState({ atk_acc_percent_enchant : stat });
	}
	updateAtkWeaponFlatEnchant(stat) {
		this.setState({ atk_weapon_flat_enchant : stat });
	}
	updateAtkArmorFlatEnchant(stat) {
		this.setState({ atk_armor_flat_enchant : stat });
	}
	updateAtkHelmetFlatEnchant(stat) {
		this.setState({ atk_helmet_flat_enchant : stat });
	}
	updateAtkAccFlatEnchant(stat) {
		this.setState({ atk_acc_flat_enchant : stat });
	}	
	
	updateMagWeaponPercentEnchant(stat) {
		this.setState({ mag_weapon_percent_enchant : stat });
	}
	updateMagArmorPercentEnchant(stat) {
		this.setState({ mag_armor_percent_enchant : stat });
	}
	updateMagHelmetPercentEnchant(stat) {
		this.setState({ mag_helmet_percent_enchant : stat });
	}
	updateMagAccPercentEnchant(stat) {
		this.setState({ mag_acc_percent_enchant : stat });
	}
	updateMagWeaponFlatEnchant(stat) {
		this.setState({ mag_weapon_flat_enchant : stat });
	}
	updateMagArmorFlatEnchant(stat) {
		this.setState({ mag_armor_flat_enchant : stat });
	}
	updateMagHelmetFlatEnchant(stat) {
		this.setState({ mag_helmet_flat_enchant : stat });
	}
	updateMagAccFlatEnchant(stat) {
		this.setState({ mag_acc_flat_enchant : stat });
	}	

	updateDefWeaponPercentEnchant(stat) {
		this.setState({ def_weapon_percent_enchant : stat });
	}
	updateDefArmorPercentEnchant(stat) {
		this.setState({ def_armor_percent_enchant : stat });
	}
	updateDefHelmetPercentEnchant(stat) {
		this.setState({ def_helmet_percent_enchant : stat });
	}
	updateDefAccPercentEnchant(stat) {
		this.setState({ def_acc_percent_enchant : stat });
	}
	updateDefWeaponFlatEnchant(stat) {
		this.setState({ def_weapon_flat_enchant : stat });
	}
	updateDefArmorFlatEnchant(stat) {
		this.setState({ def_armor_flat_enchant : stat });
	}
	updateDefHelmetFlatEnchant(stat) {
		this.setState({ def_helmet_flat_enchant : stat });
	}
	updateDefAccFlatEnchant(stat) {
		this.setState({ def_acc_flat_enchant : stat });
	}	
	
	updateMDefWeaponPercentEnchant(stat) {
		this.setState({ mdef_weapon_percent_enchant : stat });
	}
	updateMDefArmorPercentEnchant(stat) {
		this.setState({ mdef_armor_percent_enchant : stat });
	}
	updateMDefHelmetPercentEnchant(stat) {
		this.setState({ mdef_helmet_percent_enchant : stat });
	}
	updateMDefAccPercentEnchant(stat) {
		this.setState({ mdef_acc_percent_enchant : stat });
	}
	updateMDefWeaponFlatEnchant(stat) {
		this.setState({ mdef_weapon_flat_enchant : stat });
	}
	updateMDefArmorFlatEnchant(stat) {
		this.setState({ mdef_armor_flat_enchant : stat });
	}
	updateMDefHelmetFlatEnchant(stat) {
		this.setState({ mdef_helmet_flat_enchant : stat });
	}
	updateMDefAccFlatEnchant(stat) {
		this.setState({ mdef_acc_flat_enchant : stat });
	}	
	
	updateSkillWeaponPercentEnchant(stat) {
		this.setState({ skill_weapon_percent_enchant : stat });
	}
	updateSkillArmorPercentEnchant(stat) {
		this.setState({ skill_armor_percent_enchant : stat });
	}
	updateSkillHelmetPercentEnchant(stat) {
		this.setState({ skill_helmet_percent_enchant : stat });
	}
	updateSkillAccPercentEnchant(stat) {
		this.setState({ skill_acc_percent_enchant : stat });
	}
	updateSkillWeaponFlatEnchant(stat) {
		this.setState({ skill_weapon_flat_enchant : stat });
	}
	updateSkillArmorFlatEnchant(stat) {
		this.setState({ skill_armor_flat_enchant : stat });
	}
	updateSkillHelmetFlatEnchant(stat) {
		this.setState({ skill_helmet_flat_enchant : stat });
	}
	updateSkillAccFlatEnchant(stat) {
		this.setState({ skill_acc_flat_enchant : stat });
	}
	
	// Others
	updateHPBuff(stat) {
		this.setState({ hp_buff : stat });
	}
	updateAtkBuff(stat) {
		this.setState({ atk_buff : stat });
	}
	updateMagBuff(stat) {
		this.setState({ mag_buff : stat });
	}
	updateDefBuff(stat) {
		this.setState({ def_buff : stat });
	}
	updateMDefBuff(stat) {
		this.setState({ mdef_buff : stat });
	}
	updateSkillBuff(stat) {
		this.setState({ skill_buff : stat });
	}	
	
	updateHPPassive(stat) {
		this.setState({ hp_passive : stat });
	}
	updateAtkPassive(stat) {
		this.setState({ atk_passive : stat });
	}
	updateMagPassive(stat) {
		this.setState({ mag_passive : stat });
	}
	updateDefPassive(stat) {
		this.setState({ def_passive : stat });
	}
	updateMDefPassive(stat) {
		this.setState({ mdef_passive : stat });
	}
	updateSkillPassive(stat) {
		this.setState({ skill_passive : stat });
	}	
	
	updateHPPvP(stat) {
		this.setState({ hp_pvp : stat });
	}
	updateAtkPvP(stat) {
		this.setState({ atk_pvp : stat });
	}
	updateMagPvP(stat) {
		this.setState({ mag_pvp : stat });
	}
	updateDefPvP(stat) {
		this.setState({ def_pvp : stat });
	}
	updateMDefPvP(stat) {
		this.setState({ mdef_pvp : stat });
	}
	updateSkillPvP(stat) {
		this.setState({ skill_pvp : stat });
	}		

	updateEnchantType(type) {
		this.setState({ enchant_type : type });
	}


	render() {
		const total_gear_base_hp = +this.state.hp_weapon_stat + +this.state.hp_armor_stat + 
									+this.state.hp_helmet_stat + +this.state.hp_acc_stat + +this.state.hp_mastery_stat;
		const total_gear_base_atk = +this.state.atk_weapon_stat + +this.state.atk_armor_stat + 
									+this.state.atk_helmet_stat + +this.state.atk_acc_stat + +this.state.atk_mastery_stat;
		const total_gear_base_mag = +this.state.mag_weapon_stat + +this.state.mag_armor_stat + 
									+this.state.mag_helmet_stat + +this.state.mag_acc_stat + +this.state.mag_mastery_stat;
		const total_gear_base_def = +this.state.def_weapon_stat + +this.state.def_armor_stat + 
									+this.state.def_helmet_stat + +this.state.def_acc_stat + +this.state.def_mastery_stat;
		const total_gear_base_mdef = +this.state.mdef_weapon_stat + +this.state.mdef_armor_stat + 
									+this.state.mdef_helmet_stat + +this.state.mdef_acc_stat + +this.state.mdef_mastery_stat;
		const total_gear_base_skill = +this.state.skill_weapon_stat + +this.state.skill_armor_stat + 
									+this.state.skill_helmet_stat + +this.state.skill_acc_stat + +this.state.skill_mastery_stat;
									
		const total_flat_enchant_hp = +this.state.hp_weapon_flat_enchant + +this.state.hp_armor_flat_enchant +
									  +this.state.hp_helmet_flat_enchant + +this.state.hp_acc_flat_enchant;
		const total_flat_enchant_atk = +this.state.atk_weapon_flat_enchant + +this.state.atk_armor_flat_enchant +
									  +this.state.atk_helmet_flat_enchant + +this.state.atk_acc_flat_enchant;
		const total_flat_enchant_mag = +this.state.mag_weapon_flat_enchant + +this.state.mag_armor_flat_enchant +
									  +this.state.mag_helmet_flat_enchant + +this.state.mag_acc_flat_enchant;
		const total_flat_enchant_def = +this.state.def_weapon_flat_enchant + +this.state.def_armor_flat_enchant +
									  +this.state.def_helmet_flat_enchant + +this.state.def_acc_flat_enchant;
		const total_flat_enchant_mdef = +this.state.mdef_weapon_flat_enchant + +this.state.mdef_armor_flat_enchant +
									  +this.state.mdef_helmet_flat_enchant + +this.state.mdef_acc_flat_enchant;
		const total_flat_enchant_skill = +this.state.skill_weapon_flat_enchant + +this.state.skill_armor_flat_enchant +
									  +this.state.skill_helmet_flat_enchant + +this.state.skill_acc_flat_enchant;
		
		let total_percent_enchant_hp = +this.state.hp_weapon_percent_enchant + +this.state.hp_armor_percent_enchant +
									  +this.state.hp_helmet_percent_enchant + +this.state.hp_acc_percent_enchant;
		let total_percent_enchant_atk = +this.state.atk_weapon_percent_enchant + +this.state.atk_armor_percent_enchant +
									  +this.state.atk_helmet_percent_enchant + +this.state.atk_acc_percent_enchant;
		let total_percent_enchant_mag = +this.state.mag_weapon_percent_enchant + +this.state.mag_armor_percent_enchant +
									  +this.state.mag_helmet_percent_enchant + +this.state.mag_acc_percent_enchant;
		let total_percent_enchant_def = +this.state.def_weapon_percent_enchant + +this.state.def_armor_percent_enchant +
									  +this.state.def_helmet_percent_enchant + +this.state.def_acc_percent_enchant;
		let total_percent_enchant_mdef = +this.state.mdef_weapon_percent_enchant + +this.state.mdef_armor_percent_enchant +
									  +this.state.mdef_helmet_percent_enchant + +this.state.mdef_acc_percent_enchant;
		const total_percent_enchant_skill = +this.state.skill_weapon_percent_enchant + +this.state.skill_armor_percent_enchant +
									  +this.state.skill_helmet_percent_enchant + +this.state.skill_acc_percent_enchant;		
							
		let total_other_hp = +this.state.hp_buff + +this.state.hp_passive;
		let total_other_atk = +this.state.atk_buff + +this.state.atk_passive;
		let total_other_mag = +this.state.mag_buff + +this.state.mag_passive;
		let total_other_def = +this.state.def_buff + +this.state.def_passive;
		let total_other_mdef = +this.state.mdef_buff + +this.state.mdef_passive;
		let total_other_skill = +this.state.skill_buff + +this.state.skill_passive;							
							
		if (this.state.enchant_type === "roughsea") {
			total_other_atk += 10;
			total_percent_enchant_atk += 5;
			total_percent_enchant_mag += 5;			
		}
		else if (this.state.enchant_type === "fullmoon") {
			total_other_atk += 10;
			total_other_mag += 10;
			total_other_def += 10;
			total_other_mdef += 10;
			total_percent_enchant_atk += 5;
			total_percent_enchant_mag += 5;			
		}
		else if (this.state.enchant_type === "onered") {
			total_percent_enchant_atk += 5;
			total_percent_enchant_mag += 5;
		}
		else if (this.state.enchant_type === "oneblue") {
			total_percent_enchant_def += 5;
			total_percent_enchant_mdef += 5;
		}
		else if (this.state.enchant_type === "onegreen") {
			total_percent_enchant_hp += 10;
		}
		else if (this.state.enchant_type === "twored") {
			total_percent_enchant_atk += 10;
			total_percent_enchant_mag += 10;
		}
		else if (this.state.enchant_type === "twoblue") {
			total_percent_enchant_def += 10;
			total_percent_enchant_mdef += 10;
		}
		else if (this.state.enchant_type === "twogreen") {
			total_percent_enchant_hp += 20;
		}	
							
		const hp_green = total_gear_base_hp + total_flat_enchant_hp + (this.state.hp_base * (total_percent_enchant_hp / 100));
		const atk_green = total_gear_base_atk + total_flat_enchant_atk + (this.state.atk_base * (total_percent_enchant_atk / 100));
		const mag_green = total_gear_base_mag + total_flat_enchant_mag + (this.state.mag_base * (total_percent_enchant_mag / 100));
		const def_green = total_gear_base_def + total_flat_enchant_def + (this.state.def_base * (total_percent_enchant_def / 100));
		const mdef_green = total_gear_base_mdef + total_flat_enchant_mdef + (this.state.mdef_base * (total_percent_enchant_mdef / 100));
		const skill_green = total_gear_base_skill + total_flat_enchant_skill + (this.state.skill_base * (total_percent_enchant_skill / 100));
		
		const hp_total = +this.state.hp_base + +hp_green;
		const atk_total = +this.state.atk_base + +atk_green;
		const mag_total = +this.state.mag_base + +mag_green;
		const def_total = +this.state.def_base + +def_green;
		const mdef_total = +this.state.mdef_base + +mdef_green;
		const skill_total = +this.state.skill_base + +skill_green;
		
		const total_gear_skill_hp = +this.state.hp_weapon_skill + +this.state.hp_armor_skill + 
									+this.state.hp_helmet_skill + +this.state.hp_acc_skill;
		const total_gear_skill_atk = +this.state.atk_weapon_skill + +this.state.atk_armor_skill + 
									+this.state.atk_helmet_skill + +this.state.atk_acc_skill;
		const total_gear_skill_mag = +this.state.mag_weapon_skill + +this.state.mag_armor_skill + 
									+this.state.mag_helmet_skill + +this.state.mag_acc_skill;
		const total_gear_skill_def = +this.state.def_weapon_skill + +this.state.def_armor_skill + 
									+this.state.def_helmet_skill + +this.state.def_acc_skill;
		const total_gear_skill_mdef = +this.state.mdef_weapon_skill + +this.state.mdef_armor_skill + 
									+this.state.mdef_helmet_skill + +this.state.mdef_acc_skill;
		const total_gear_skill_skill = +this.state.skill_weapon_skill + +this.state.skill_armor_skill + 
									+this.state.skill_helmet_skill + +this.state.skill_acc_skill;
									
		const in_battle_hp = hp_total * (1 + ((total_gear_skill_hp + total_other_hp) / 100));
		const in_battle_atk = atk_total * (1 + ((total_gear_skill_atk + total_other_atk) / 100));
		const in_battle_mag = mag_total * (1 + ((total_gear_skill_mag + total_other_mag) / 100));
		const in_battle_def = def_total * (1 + ((total_gear_skill_def + total_other_def) / 100));
		const in_battle_mdef = mdef_total * (1 + ((total_gear_skill_mdef + total_other_mdef) / 100));
		const in_battle_skill = skill_total * (1 + ((total_gear_skill_skill + total_other_skill) / 100));
				
		const pvp_hp_bonus = hp_total * (1 + ((total_gear_skill_hp + total_other_hp + 40) / 100));
		
		const total_pvp_hp = +pvp_hp_bonus + +this.state.hp_pvp;
		const total_pvp_atk = +in_battle_atk + +this.state.atk_pvp;
		const total_pvp_mag = +in_battle_mag + +this.state.mag_pvp;
		const total_pvp_def = +in_battle_def + +this.state.def_pvp;
		const total_pvp_mdef = +in_battle_mdef + +this.state.mdef_pvp;
		const total_pvp_skill = +in_battle_skill + +this.state.skill_pvp;
		
		return (
			<div class="table-responsive">
				<table class="table" id="base_stats">
				  <thead class="thead-dark">
					<tr>
						<TableHead text="status" lang={this.state.language} />
						<TableHead text="black" lang={this.state.language} />
						<TableHead text="green" lang={this.state.language} />
						<TableHead text="total" lang={this.state.language} />
						<TableHead text="inbattle" lang={this.state.language} />
						<TableHead text="pvp" lang={this.state.language} />
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <RowHead text="hp" lang={this.state.language} />
					  <OpenInput id="hp_unit" onInput={this.updateHP} />
					  <ClosedInput id="hp_unit_green" value={hp_green} />
					  <ClosedInput id="hp_unit_total" value={hp_total} />
					  <ClosedInput id="hp_unit_battle" value={in_battle_hp.toFixed(1)} />
					  <ClosedInput id="hp_unit_pvp" value={total_pvp_hp.toFixed(1)} />
					</tr>
					<tr>
					  <RowHead text="atk" lang={this.state.language} />
					  <OpenInput id="atk_unit" onInput={this.updateAtk} />
					  <ClosedInput id="atk_unit_green" value={atk_green} />
					  <ClosedInput id="atk_unit_total" value={atk_total} />
					  <ClosedInput id="atk_unit_battle" value={in_battle_atk.toFixed(1)} />	
					  <ClosedInput id="atk_unit_pvp" value={total_pvp_atk.toFixed(1)} />					  
					</tr>
					<tr>
					  <RowHead text="mag" lang={this.state.language} />
					  <OpenInput id="mag_unit" onInput={this.updateMag} />				  
					  <ClosedInput id="mag_unit_green" value={mag_green} />
					  <ClosedInput id="mag_unit_total" value={mag_total} />
					  <ClosedInput id="mag_unit_battle" value={in_battle_mag.toFixed(1)} />	
					  <ClosedInput id="mag_unit_pvp" value={total_pvp_mag.toFixed(1)} />					  
					</tr>
					<tr>
					  <RowHead text="def" lang={this.state.language} />
					  <OpenInput id="def_unit" onInput={this.updateDef} />	
					  <ClosedInput id="def_unit_green" value={def_green} />
					  <ClosedInput id="def_unit_total" value={def_total} />
					  <ClosedInput id="def_unit_battle" value={in_battle_def.toFixed(1)} />
					  <ClosedInput id="def_unit_pvp" value={total_pvp_def.toFixed(1)} />
					</tr>			
					<tr>
					  <RowHead text="mdef" lang={this.state.language} />
					  <OpenInput id="mdef_unit" onInput={this.updateMDef} />	
					  <ClosedInput id="mdef_unit_green" value={mdef_green} />
					  <ClosedInput id="mdef_unit_total" value={mdef_total} />
					  <ClosedInput id="mdef_unit_battle" value={in_battle_mdef.toFixed(1)} />
					  <ClosedInput id="mdef_unit_pvp" value={total_pvp_mdef.toFixed(1)} />
					</tr>			
					<tr>
					  <RowHead text="skill" lang={this.state.language} />
					  <OpenInput id="skill_unit" onInput={this.updateSkill} />	
					  <ClosedInput id="skill_unit_green" value={skill_green} />
					  <ClosedInput id="skill_unit_total" value={skill_total} />
					  <ClosedInput id="skill_unit_battle" value={in_battle_skill.toFixed(1)} />					  			  
					  <ClosedInput id="skill_unit_pvp" value={total_pvp_skill.toFixed(1)} />
					</tr>
				  </tbody>
				</table>
				
				<table class="table" id="enchant_stats">
				  <GearTableHeader tableHeader="gear_stat" lang={this.state.language} />
				  <tbody>
					<tr>
					  <RowHead text="hp" lang={this.state.language} />
					  <OpenInput id="hp_weapon_stat" onInput={this.updateHPWeaponStat} />
					  <OpenInput id="hp_armor_stat" onInput={this.updateHPArmorStat} />
					  <OpenInput id="hp_helmet_stat" onInput={this.updateHPHelmetStat} />
					  <OpenInput id="hp_acc_stat" onInput={this.updateHPAccStat} />
					  <OpenInput id="hp_mastery_stat" onInput={this.updateHPMasteryStat} />  
					</tr>
					<tr>
					  <RowHead text="atk" lang={this.state.language} />
					  <OpenInput id="atk_weapon_stat" onInput={this.updateAtkWeaponStat} />
					  <OpenInput id="atk_armor_stat" onInput={this.updateAtkArmorStat} />
					  <OpenInput id="atk_helmet_stat" onInput={this.updateAtkHelmetStat} />
					  <OpenInput id="atk_acc_stat" onInput={this.updateAtkAccStat} />
					  <OpenInput id="atk_mastery_stat" onInput={this.updateAtkMasteryStat} />  				  			  
					</tr>
					<tr>
					  <RowHead text="mag" lang={this.state.language} />
					  <OpenInput id="mag_weapon_stat" onInput={this.updateMagWeaponStat} />
					  <OpenInput id="mag_armor_stat" onInput={this.updateMagArmorStat} />
					  <OpenInput id="mag_helmet_stat" onInput={this.updateMagHelmetStat} />
					  <OpenInput id="mag_acc_stat" onInput={this.updateMagAccStat} />
					  <OpenInput id="mag_mastery_stat" onInput={this.updateMagMasteryStat} /> 				  			  				  			  
					</tr>
					<tr>
					  <RowHead text="def" lang={this.state.language} />
					  <OpenInput id="def_weapon_stat" onInput={this.updateDefWeaponStat} />
					  <OpenInput id="def_armor_stat" onInput={this.updateDefArmorStat} />
					  <OpenInput id="def_helmet_stat" onInput={this.updateDefHelmetStat} />
					  <OpenInput id="def_acc_stat" onInput={this.updateDefAccStat} />
					  <OpenInput id="def_mastery_stat" onInput={this.updateDefMasteryStat} />  				  
					</tr>			
					<tr>
					  <RowHead text="mdef" lang={this.state.language} />
					  <OpenInput id="mdef_weapon_stat" onInput={this.updateMDefWeaponStat} />
					  <OpenInput id="mdef_armor_stat" onInput={this.updateMDefArmorStat} />
					  <OpenInput id="mdef_helmet_stat" onInput={this.updateMDefHelmetStat} />
					  <OpenInput id="mdef_acc_stat" onInput={this.updateMDefAccStat} />
					  <OpenInput id="mdef_mastery_stat" onInput={this.updateMDefMasteryStat} /> 					  			  
					</tr>			
					<tr>
					  <RowHead text="skill" lang={this.state.language} />
					  <OpenInput id="skill_weapon_stat" onInput={this.updateSkillWeaponStat} />
					  <OpenInput id="skill_armor_stat" onInput={this.updateSkillArmorStat} />
					  <OpenInput id="skill_helmet_stat" onInput={this.updateSkillHelmetStat} />
					  <OpenInput id="skill_acc_stat" onInput={this.updateSkillAccStat} />
					  <OpenInput id="skill_mastery_stat" onInput={this.updateSkillMasteryStat} /> 				  			  
					</tr>
				  </tbody>

				  <GearTableHeader tableHeader="gear_skill" lang={this.state.language} />
				  <tbody>
					<tr>
					  <RowHead text="hp" lang={this.state.language} />
					  <OpenInput id="hp_weapon_skill" onInput={this.updateHPWeaponSkill} />
					  <OpenInput id="hp_armor_skill" onInput={this.updateHPArmorSkill} />
					  <OpenInput id="hp_helmet_skill" onInput={this.updateHPHelmetSkill} />
					  <OpenInput id="hp_acc_skill" onInput={this.updateHPAccSkill} />
					  <ClosedInput id="hp_mastery_skill" />	
					</tr>
					<tr>
					  <RowHead text="atk" lang={this.state.language} />
					  <OpenInput id="atk_weapon_skill" onInput={this.updateAtkWeaponSkill} />
					  <OpenInput id="atk_armor_skill" onInput={this.updateAtkArmorSkill} />
					  <OpenInput id="atk_helmet_skill" onInput={this.updateAtkHelmetSkill} />
					  <OpenInput id="atk_acc_skill" onInput={this.updateAtkAccSkill} />
					  <ClosedInput id="atk_mastery_skill" />	
					</tr>
					<tr>
					  <RowHead text="mag" lang={this.state.language} />
					  <OpenInput id="mag_weapon_skill" onInput={this.updateMagWeaponSkill} />
					  <OpenInput id="mag_armor_skill" onInput={this.updateMagArmorSkill} />
					  <OpenInput id="mag_helmet_skill" onInput={this.updateMagHelmetSkill} />
					  <OpenInput id="mag_acc_skill" onInput={this.updateMagAccSkill} />
					  <ClosedInput id="mag_mastery_skill" />						  
					</tr>
					<tr>
					  <RowHead text="def" lang={this.state.language} />
					  <OpenInput id="def_weapon_skill" onInput={this.updateDefWeaponSkill} />
					  <OpenInput id="def_armor_skill" onInput={this.updateDefArmorSkill} />
					  <OpenInput id="def_helmet_skill" onInput={this.updateDefHelmetSkill} />
					  <OpenInput id="def_acc_skill" onInput={this.updateDefAccSkill} />
					  <ClosedInput id="def_mastery_skill" />						  
					</tr>			
					<tr>
					  <RowHead text="mdef" lang={this.state.language} />
					  <OpenInput id="mdef_weapon_skill" onInput={this.updateMDefWeaponSkill} />
					  <OpenInput id="mdef_armor_skill" onInput={this.updateMDefArmorSkill} />
					  <OpenInput id="mdef_helmet_skill" onInput={this.updateMDefHelmetSkill} />
					  <OpenInput id="mdef_acc_skill" onInput={this.updateMDefAccSkill} />
					  <ClosedInput id="mdef_mastery_skill" />						  
					</tr>			
					<tr>
					  <RowHead text="skill" lang={this.state.language} />
					  <OpenInput id="skill_weapon_skill" onInput={this.updateSkillWeaponSkill} />
					  <OpenInput id="skill_armor_skill" onInput={this.updateSkillArmorSkill} />
					  <OpenInput id="skill_helmet_skill" onInput={this.updateSkillHelmetSkill} />
					  <OpenInput id="skill_acc_skill" onInput={this.updateSkillAccSkill} />
					  <ClosedInput id="skill_mastery_skill" />						  
					</tr>
				  </tbody>	

				  <GearTableHeader tableHeader="gear_enchant" lang={this.state.language} />
				  <tbody>
					<tr>
					  <RowHead text="hp_percentage" lang={this.state.language} />
					  <OpenInput id="hp_weapon_percentage_enchant" onInput={this.updateHPWeaponPercentEnchant} />
					  <OpenInput id="hp_armor_percentage_enchant" onInput={this.updateHPArmorPercentEnchant} />
					  <OpenInput id="hp_helmet_percentage_enchant" onInput={this.updateHPHelmetPercentEnchant} />
					  <OpenInput id="hp_acc_percentage_enchant" onInput={this.updateHPAccPercentEnchant} />
					  <ClosedInput id="hp_mastery_percentage_enchant" />						  
					</tr>
					<tr>
					  <RowHead text="hp_flat" lang={this.state.language} />
					  <OpenInput id="hp_weapon_flat_enchant" onInput={this.updateHPWeaponFlatEnchant} />
					  <OpenInput id="hp_armor_flat_enchant" onInput={this.updateHPArmorFlatEnchant} />
					  <OpenInput id="hp_helmet_flat_enchant" onInput={this.updateHPHelmetFlatEnchant} />
					  <OpenInput id="hp_acc_flat_enchant" onInput={this.updateHPAccFlatEnchant} />
					  <ClosedInput id="hp_mastery_flat_enchant" />	
					</tr>					
					<tr>
					  <RowHead text="atk_percentage" lang={this.state.language} />
					  <OpenInput id="atk_weapon_percentage_enchant" onInput={this.updateAtkWeaponPercentEnchant} />
					  <OpenInput id="atk_armor_percentage_enchant" onInput={this.updateAtkArmorPercentEnchant} />
					  <OpenInput id="atk_helmet_percentage_enchant" onInput={this.updateAtkHelmetPercentEnchant} />
					  <OpenInput id="atk_acc_percentage_enchant" onInput={this.updateAtkAccPercentEnchant} />
					  <ClosedInput id="atk_mastery_percentage_enchant" />						  
					</tr>
					<tr>
					  <RowHead text="atk_flat" lang={this.state.language} />
					  <OpenInput id="atk_weapon_flat_enchant" onInput={this.updateAtkWeaponFlatEnchant} />
					  <OpenInput id="atk_armor_flat_enchant" onInput={this.updateAtkArmorFlatEnchant} />
					  <OpenInput id="atk_helmet_flat_enchant" onInput={this.updateAtkHelmetFlatEnchant} />
					  <OpenInput id="atk_acc_flat_enchant" onInput={this.updateAtkAccFlatEnchant} />
					  <ClosedInput id="atk_mastery_flat_enchant" />	
					</tr>	
					<tr>
					  <RowHead text="mag_percentage" lang={this.state.language} />
					  <OpenInput id="mag_weapon_percentage_enchant" onInput={this.updateMagWeaponPercentEnchant} />
					  <OpenInput id="mag_armor_percentage_enchant" onInput={this.updateMagArmorPercentEnchant} />
					  <OpenInput id="mag_helmet_percentage_enchant" onInput={this.updateMagHelmetPercentEnchant} />
					  <OpenInput id="mag_acc_percentage_enchant" onInput={this.updateMagAccPercentEnchant} />
					  <ClosedInput id="mag_mastery_percentage_enchant" />						  
					</tr>
					<tr>
					  <RowHead text="mag_flat" lang={this.state.language} />
					  <OpenInput id="mag_weapon_flat_enchant" onInput={this.updateMagWeaponFlatEnchant} />
					  <OpenInput id="mag_armor_flat_enchant" onInput={this.updateMagArmorFlatEnchant} />
					  <OpenInput id="mag_helmet_flat_enchant" onInput={this.updateMagHelmetFlatEnchant} />
					  <OpenInput id="mag_acc_flat_enchant" onInput={this.updateMagAccFlatEnchant} />
					  <ClosedInput id="mag_mastery_flat_enchant" />	
					</tr>
					<tr>
					  <RowHead text="def_percentage" lang={this.state.language} />
					  <OpenInput id="def_weapon_percentage_enchant" onInput={this.updateDefWeaponPercentEnchant} />
					  <OpenInput id="def_armor_percentage_enchant" onInput={this.updateDefArmorPercentEnchant} />
					  <OpenInput id="def_helmet_percentage_enchant" onInput={this.updateDefHelmetPercentEnchant} />
					  <OpenInput id="def_acc_percentage_enchant" onInput={this.updateDefAccPercentEnchant} />
					  <ClosedInput id="def_mastery_percentage_enchant" />						  
					</tr>
					<tr>
					  <RowHead text="def_flat" lang={this.state.language} />
					  <OpenInput id="def_weapon_flat_enchant" onInput={this.updateDefWeaponFlatEnchant} />
					  <OpenInput id="def_armor_flat_enchant" onInput={this.updateDefArmorFlatEnchant} />
					  <OpenInput id="def_helmet_flat_enchant" onInput={this.updateDefHelmetFlatEnchant} />
					  <OpenInput id="def_acc_flat_enchant" onInput={this.updateDefAccFlatEnchant} />
					  <ClosedInput id="def_mastery_flat_enchant" />	
					</tr>		
					<tr>
					  <RowHead text="mdef_percentage" lang={this.state.language} />
					  <OpenInput id="mdef_weapon_percentage_enchant" onInput={this.updateMDefWeaponPercentEnchant} />
					  <OpenInput id="mdef_armor_percentage_enchant" onInput={this.updateMDefArmorPercentEnchant} />
					  <OpenInput id="mdef_helmet_percentage_enchant" onInput={this.updateMDefHelmetPercentEnchant} />
					  <OpenInput id="mdef_acc_percentage_enchant" onInput={this.updateMDefAccPercentEnchant} />
					  <ClosedInput id="mdef_mastery_percentage_enchant" />						  
					</tr>
					<tr>
					  <RowHead text="mdef_flat" lang={this.state.language} />
					  <OpenInput id="mdef_weapon_flat_enchant" onInput={this.updateMDefWeaponFlatEnchant} />
					  <OpenInput id="mdef_armor_flat_enchant" onInput={this.updateMDefArmorFlatEnchant} />
					  <OpenInput id="mdef_helmet_flat_enchant" onInput={this.updateMDefHelmetFlatEnchant} />
					  <OpenInput id="mdef_acc_flat_enchant" onInput={this.updateMDefAccFlatEnchant} />
					  <ClosedInput id="mdef_mastery_flat_enchant" />	
					</tr>			
					<tr>
					  <RowHead text="skill_percentage" lang={this.state.language} />
					  <OpenInput id="skill_weapon_percentage_enchant" onInput={this.updateSkillWeaponPercentEnchant} />
					  <OpenInput id="skill_armor_percentage_enchant" onInput={this.updateSkillArmorPercentEnchant} />
					  <OpenInput id="skill_helmet_percentage_enchant" onInput={this.updateSkillHelmetPercentEnchant} />
					  <OpenInput id="skill_acc_percentage_enchant" onInput={this.updateSkillAccPercentEnchant} />
					  <ClosedInput id="skill_mastery_percentage_enchant" />						  
					</tr>
					<tr>
					  <RowHead text="skill_flat" lang={this.state.language} />
					  <OpenInput id="skill_weapon_flat_enchant" onInput={this.updateSkillWeaponFlatEnchant} />
					  <OpenInput id="skill_armor_flat_enchant" onInput={this.updateSkillArmorFlatEnchant} />
					  <OpenInput id="skill_helmet_flat_enchant" onInput={this.updateSkillHelmetFlatEnchant} />
					  <OpenInput id="skill_acc_flat_enchant" onInput={this.updateSkillAccFlatEnchant} />
					  <ClosedInput id="skill_mastery_flat_enchant" />	
					</tr>	
				  </tbody>					  
				</table>

				<table class="table" id="unit_stat_others">
					<thead class="thead-dark">
						<tr>
							<TableHead text="others" lang={this.state.language} />
							<TableHead text="hp" lang={this.state.language} />
							<TableHead text="atk" lang={this.state.language} />
							<TableHead text="mag" lang={this.state.language} />
							<TableHead text="def" lang={this.state.language} />
							<TableHead text="mdef" lang={this.state.language} />													
							<TableHead text="skill" lang={this.state.language} />													
						</tr>
					</thead>				
					<tbody>
						<tr>
							<RowHead text="buffs" lang={this.state.language} />
							<OpenInput id="hp_buff" onInput={this.updateHPBuff} />
							<OpenInput id="atk_buff" onInput={this.updateAtkBuff} />
							<OpenInput id="mag_buff" onInput={this.updateMagBuff} />
							<OpenInput id="def_buff" onInput={this.updateDefBuff} />
							<OpenInput id="mdef_buff" onInput={this.updateMDefBuff} />
							<OpenInput id="skill_buff" onInput={this.updateSkillBuff} />							
						</tr>
						<tr>
							<RowHead text="passives" lang={this.state.language} />
							<OpenInput id="hp_passive" onInput={this.updateHPPassive} />
							<OpenInput id="atk_passive" onInput={this.updateAtkPassive} />
							<OpenInput id="mag_passive" onInput={this.updateMagPassive} />
							<OpenInput id="def_passive" onInput={this.updateDefPassive} />
							<OpenInput id="mdef_passive" onInput={this.updateMDefPassive} />
							<OpenInput id="skill_passive" onInput={this.updateSkillPassive} />					  			  
						</tr>
						<tr id="unit_table_end">
							<RowHead text="pvpmastery" lang={this.state.language} />
							<OpenInput id="hp_pvp" onInput={this.updateHPPvP} />
							<OpenInput id="atk_pvp" onInput={this.updateAtkPvP} />
							<OpenInput id="mag_pvp" onInput={this.updateMagPvP} />
							<OpenInput id="def_pvp" onInput={this.updateDefPvP} />
							<OpenInput id="mdef_pvp" onInput={this.updateMDefPvP} />
							<OpenInput id="skill_pvp" onInput={this.updateSkillPvP} />					  			  
						</tr>						
						<tr>
							<RowHead text="enchant" lang={this.state.language} />	
							<UnitEnchant onInput={this.updateEnchantType} lang={this.state.language} />
						</tr>
					</tbody>
				</table>				
			</div>						
		)
	}
}

export default UnitStatCalculator;