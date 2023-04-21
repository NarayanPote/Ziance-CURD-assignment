module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      birthday: Date,
      isActive: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("Job", schema);
  return Tutorial;
};
