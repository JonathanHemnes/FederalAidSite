'use strict';
exports.register = (server, options, next) => {

    server.route({
        method: 'POST',
        path: '/getFilteredPrograms',
        handler: (request, reply) => {

            const FederalAidPrograms = request.server.plugins['hapi-mongo-models'].Programs;
            const person = request.payload;
            const percentageOfFPL = calculateFPL(person.income, person.familySize);
            const ageOfYoungestChild = getYoungestChild(person.children);
            const filter = {
                maxFPL: { $gte: percentageOfFPL },
                $or: generateChildFilter(ageOfYoungestChild)
            };
            FederalAidPrograms.find(filter, (err, programs) => {

                if (err) {
                    return reply(err);
                }
                const filteredPrograms = getProgramsThatMatchPregnancyRequirement(programs, person);
                return reply(filteredPrograms);
            });
        }
    });

    const getProgramsThatMatchPregnancyRequirement = (programs, person) => {

        const filteredPrograms = [];
        programs.map((program) => {

            if (!program.isRequiredToBePregnant) {
                filteredPrograms.push(program);
            }
            else {
                if (person.isPregnant) {
                    filteredPrograms.push(program);
                }
            }
        });
        return filteredPrograms;
    };

    const generateChildFilter = (ageOfYoungestChild) => {

        const filter = [];
        filter.push({
            requiredChildAge: null
        });
        if (ageOfYoungestChild !== null) {
            filter.push({
                requiredChildAge: { $gte: ageOfYoungestChild }
            });
        }
        return filter;
    };

    const calculateFPL = (annualIncome, numberOfFamilyMembers) => {

        const individualIncome = 11880;
        const increment = 4140;
        const fpl = individualIncome + (increment * (numberOfFamilyMembers - 1));
        return annualIncome / fpl * 100;
    };

    const getYoungestChild = (children) => {

        if (children.length === 0) {
            return null;
        }
        let youngest = children[0];
        children.map((child) => {

            if (child < youngest) {
                youngest = child;
            }
        });
        return youngest;
    };

    next();
};


exports.register.attributes = {
    name: 'api'
};
