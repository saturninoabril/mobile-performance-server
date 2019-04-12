const metric = (sequelize, DataTypes) => {
  const Metric = sequelize.define('metric', {
    deviceInfo: DataTypes.JSON,
    displayTimeUnit: DataTypes.STRING,
    traceEvents: DataTypes.JSON,
  });

  Metric.associate = (models) => {
    Metric.hasMany(models.Trace, {
      foreignKey: 'metricId',
      onDelete: 'CASCADE',
    });
  };

  Metric.findById = async (id) => {
    return await Metric.findOne({
      where: {id},
    });
  };

  return Metric;
};

export default metric;
