const trace = (sequelize, DataTypes) => {
  const Trace = sequelize.define('trace', {
    traceCat: DataTypes.STRING,
    traceName: DataTypes.STRING,
    traceDur: DataTypes.INTEGER,
    apiLevel: DataTypes.STRING,
    buildNumber: DataTypes.STRING,
    bundleId: DataTypes.STRING,
    brand: DataTypes.STRING,
    country: DataTypes.STRING,
    deviceId: DataTypes.STRING,
    deviceLocale: DataTypes.STRING,
    deviceType: DataTypes.STRING,
    deviceUniqueId: DataTypes.STRING,
    height: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    isEmulator: DataTypes.BOOLEAN,
    isTablet: DataTypes.BOOLEAN,
    manufacturer: DataTypes.STRING,
    maxMemory: DataTypes.INTEGER,
    model: DataTypes.STRING,
    serverVersion: DataTypes.STRING,
    systemName: DataTypes.STRING,
    systemVersion: DataTypes.STRING,
    timezone: DataTypes.STRING,
    version: DataTypes.STRING,
  });

  return Trace;
};

export default trace;
