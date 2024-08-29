"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";
import { products } from "@wix/stores";
import Add from "./Add";

export default function CustomisedProduct({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  useEffect(() => {
    //Initializing selected options with the first choice of each option
    const initialOptions: { [key: string]: string } = {};
    productOptions.forEach((option) => {
      if (option.choices && option.choices.length > 0) {
        initialOptions[option.name!] = option.choices?.[0]?.description ?? "";
      }
    });
    setSelectedOptions(initialOptions);
  }, [productOptions]);

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variants) => {
      const variantChoice = variants.choices;

      if (!variantChoice) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoice[key] === value
        ) &&
        variants.stock?.inStock &&
        variants.stock?.quantity &&
        variants.stock?.quantity > 0
      );
    });
  };

  return (
    <>
      <div className="space-y-4">
        {productOptions.map((option) => (
          <div key={option.name}>
            <h3 className="text-lg font-semibold">Choose a {option.name}</h3>
            <RadioGroup
              value={selectedOptions[option.name!] || ""}
              onValueChange={(value) => handleOptionSelect(option.name!, value)}
              className="flex flex-col space-y-2"
            >
              {option.choices?.map((choice) => {
                const disabled = !isVariantInStock({
                  ...selectedOptions,
                  [option.name!]: choice.description!,
                });

                const selected =
                  selectedOptions[option.name!] === choice.description;

                const clickHandler = disabled
                  ? undefined
                  : () => handleOptionSelect(option.name!, choice.description!);

                return (
                  <div
                    key={choice.value}
                    className={`flex items-center space-x-3 ${
                      disabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <RadioGroupItem
                      value={choice.description!}
                      id={choice.value}
                      disabled={disabled}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={choice.value}
                      className={`flex items-center space-x-3 cursor-pointer p-2 rounded-md transition-all ${
                        selected ? "bg-gray-100" : "hover:bg-gray-50"
                      }`}
                      onClick={() => {
                        if (!disabled) {
                          handleOptionSelect(option.name!, choice.description!);
                        }
                      }}
                    >
                      {option.name === "Color" ? (
                        <>
                          {selected && (
                            <div
                              className={`w-6 h-6 rounded-full border-2 ${
                                selected ? "border-gray-400" : ""
                              }`}
                              style={{
                                backgroundColor: choice.value,
                                cursor: disabled ? "not-allowed" : "pointer",
                              }}
                              onClick={!disabled ? clickHandler : undefined}
                            />
                          )}
                          <span className="text-sm font-medium">
                            {choice.description}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-medium">
                          {choice.description}
                        </span>
                      )}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}
      </div>

      <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-000000-000000-000000000001"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
    </>
  );
}
