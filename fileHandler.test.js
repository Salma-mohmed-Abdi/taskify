const { writeTasksToFile, readTasksFromFile } = require('../utils/fileHandler');
const fs = require('fs');

jest.mock('fs');

describe('fileHandler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('writeTasksToFile', () => {
    it('should write tasks to file', () => {
      const tasks = [{ id: 1, title: 'Task 1' }];
      writeTasksToFile(tasks);
      expect(fs.writeFileSync).toHaveBeenCalledWith('./data/tasks.json', JSON.stringify(tasks, null, 2));
    });

    it('should write an empty array to file when given an empty array', () => {
      const tasks = [];
      writeTasksToFile(tasks);
      expect(fs.writeFileSync).toHaveBeenCalledWith('./data/tasks.json', '[]');
    });
  });

 
