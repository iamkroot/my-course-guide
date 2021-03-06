const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    forModel: {
      type: String,
      required: true,
      enum: ["Record", "Reply"]
    },
    for: {
      type: Schema.Types.ObjectId,
      index: true,
      refPath: "onModel"
    },
    by: {
      _id: false,
      type: Schema.Types.ObjectId,
      index: true,
      ref: "Student"
    }
  },
  {
    timestamps: true
  }
);

reportSchema.pre("find", function(next) {
  this.populate({ path: "for", model: "Record" });
  next();
});
reportSchema.pre("findOne", function(next) {
  this.populate({ path: "for", model: "Record" });
  next();
});
reportSchema.pre("findOneAndDelete", function(next) {
  this.populate({ path: "for", model: "Record" });
  next();
});
mongoose.model("Report", reportSchema);
