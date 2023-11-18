export const Classier = (classesObject: { [x: string]: boolean }) => {
    const entries = Object.entries(classesObject);
    const filteredEntries = entries.filter((entry) => entry[1]).map( entry => entry[0]);
    const formattedClasses = filteredEntries.toString().replace(',', ' ');
    return formattedClasses;
  }
  