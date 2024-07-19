import  projectController  from '../controllers/projectController.js';


await test('insert', async () => {
    let testData = {
        title: 'Test Title 1',
        description: 'Test Description',
        technologies: ['Test Technology'],
    }

    let testProject = await projectController.create({
        body: testData
    })

    let insertedProject = await projectController.getById({
        params: {
            id: testProject.insertedId
        }
    })

    expect(insertedProject.title).toBe(testData.title)
});

test('update', async () => {
    let testData = {
        title: 'Test Title 1',
        description: 'Test Description',
        technologies: ['Test Technology'],
    }

    let testProject = await projectController.create({
        body: testData
    });

    let updatedProject = await projectController.update({
        params: {
            id: testProject.insertedId
        },
        body: {
            title: 'Updated Title'
        }
    });

    expect(updatedProject.modifiedCount).toBe(1);
});

test('delete', async () => {
    let testData = {
        title: 'Test Title 1',
        description: 'Test Description',
        technologies: ['Test Technology'],
    }

    let testProject = await projectController.create({
        body: testData
    });

    let deletedProject = await projectController.delete({
        params: {
            id: testProject.insertedId
        }
    });

    expect(deletedProject.deletedCount).toBe(1);
});