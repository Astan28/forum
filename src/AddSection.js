import React from "react";
import "./AddSection.css";
function AddSection() {
  return (
    <div>
                <form className="AddSection__form" >

                <div className="form-group">
                    <label><h4>Nazwa sekcji</h4></label>
                    <input type="text" className="form-control" placeholder="Podaj nazwę" name="name" />
                </div>

                <button type="submit" class="btn btn-dark">Zapisz</button>
            </form>
            </div>
  );
}

export default AddSection;
