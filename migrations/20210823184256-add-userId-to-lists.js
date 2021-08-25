'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Lists', 
    	'userId', 
    	{ 
    		type: Sequelize.INTEGER 
    	});
  },

  down: async (queryInterface, Sequelize) => {
    //await queryInterface.removeColumn('Lists', 'userId') 
  }
};
